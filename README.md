# Style-Panel

A CSS key-value panel for [React](http://facebook.github.io/react/).

## Installation

style-panel is available as an [npm package](https://www.npmjs.org/package/style-panel).

```sh
npm install style-panel
```

## Example
[https://dht.github.io/style-panel](https://dht.github.io/style-panel)

## Usage

Here is a quick example to get you started:

**Import**
```jsx
 import StylePanel from 'style-panel/StylePanel';
```

**Simple**
```jsx 
<div style={{width: '400px',position: 'fixed',top: 0,left: 0,marginLeft: '60px',zIndex: 999,backgroundColor: 'white',boxShadow: '0 0 5px rgba(0,0,0,0.1)',borderRadius: '1px'}}>
    <StylePanel
        styleId={ 1 }
        elementStyle={{color:'#f928f9', fontSize:'16px'}}
    />
</div>
```

**Complete**
```jsx 
<div style={{width: '400px',position: 'fixed',top: 0,left: 0,marginLeft: '60px',zIndex: 999,backgroundColor: 'white',boxShadow: '0 0 5px rgba(0,0,0,0.1)',borderRadius: '1px'}}>
    <StylePanel
        styleId={ 1 }
        elementStyle={{color:'#f928f9', fontSize:'16px'}}
        applyStyle={(style) => console.log(style)}
        previewStyle={(style) => console.log(style)}
        regainFocus={true}
        hideStyleGrid={false}
        iconName={'select_all'}    // material icon such as: text_format, image, view_column
    />
</div>
```

## Contribution
To run locally install all the dependencies:

dev:
```sh
npm install
```

peer:
```sh
npm install react@^15.4.1 react-dom@^15.4.1 material-ui@^0.18.6
```

run with npm:
```sh
npm start
```
and open:[http://localhost:3000](http://localhost:3000)

first test was added as a starting point:
```sh
npm test
```
We need to understand how to trigger long key presses and mouse moves in **enzyme** to further test this component. 
Any contributions are welcomed. 


## License
This project is licensed under the terms of the
[MIT license](https://github.com/quickstudio/flex-editor/blob/master/LICENSE)
