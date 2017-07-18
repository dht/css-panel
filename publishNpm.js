const spawn = require('child_process').spawn;
const fs = require('fs');

const runCommand = (command, args, path, log) => {
    return new Promise((resolve, reject) => {

        const child = spawn(command, args || [], {cwd: path});

        child.stdout.on('data', function (buf) {
            if (log) {
                console.log(buf.toString());
            }
        });

        child.stdout.on('close', function () {
            resolve();
        });

        child.stdout.on('error', function () {
            reject();
        });
    })
}

const readJson = (path) => {
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
}

const gulp = (path, npm) => {

    let version;

    return runCommand('gulp', [], path)
        .then(() => {

            if (npm) {
                return runCommand('npm', ['install', '--save', npm], path);
            } else {
                return Promise.resolve(true);
            }
        })
        .then(() => {
            const json = readJson(path + '/package.json');
            version = json.version;
            return runCommand('npm', ['publish'], path + '/dist', true);
        })
        .then(() => {
            console.log('publish done');
            return Promise.resolve(version);
        })
}

const paths = ['/Users/Guy/Documents/Guy/style-panel', '/Users/Guy/Documents/Guy/MovableCanvas', '/Users/Guy/Documents/Guy/lpm', '/Users/Guy/Documents/Guy/flex-editor', '/Users/Guy/Documents/Guy/jupiterRising'];


let versions = [];

gulp(paths[0])
    .then(version => {
        versions[0] = version;
        return gulp(paths[1])
    })
    .then(version => {
        versions[1] = version;
        return gulp(paths[2])
    })
    .then(version => {
        versions[2] = version;
        console.log('versions -> ', versions);
        return gulp(paths[3], [
            'style-panel@^' + versions[0],
            'movable-canvas@^' + versions[1],
            'lpm-core@^' + versions[2],
        ].join(' '))
    })
    .then(version => {
        versions[3] = version;
        return runCommand('cd', [paths[4]])
    })
    .then(() => {
        console.log('version -> ', versions[3]);
        return runCommand('npm', ['install', '--save', 'flex-editor@^' + versions[3]], true);
    })
    .then(() => {
        console.log('true -> ', true);
    });
