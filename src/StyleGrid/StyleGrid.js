import React from 'react'
import Attributes from '../constants/Attributes';
import IconButton from 'material-ui/IconButton';

class StyleGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            attributes: Attributes
        };
    }


    val(key) {
        const {elementStyle = {}} = this.props || {};
        return elementStyle[key];
    }

    render() {
        return (
            <div style={styles.container}>
                {Object.keys(this.state.attributes)
                    .filter(key => {
                        return this.val(key);
                    })
                    .map((key, index) => {
                        const attribute = this.state.attributes[key];
                        return (
                            <div key={key} style={styles.attribute}
                                 onClick={() => this.props.commandSelected(key)}
                                 onContextMenu={(ev) => {
                                     ev.preventDefault();
                                     this.props.keyReset(key)
                                 }}
                                 className={'hover'}>
                                <div style={styles.number}>
                                    {attribute.index}
                                </div>
                                <div style={styles.label}>
                                    {key}
                                </div>
                                <div style={styles.value}>
                                    {this.val(key)}
                                </div>
                            </div>);
                    })}
            </div>

        )
    }
}

const styleSmall = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        fontSize: '0.8em',
    },
    attribute: {
        boxSizing: "border-box",
        borderRight: "1px solid rgba(255, 255, 255, 0.2)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        height: "40px",
        position: "relative",
        outline: "none",
        cursor: "pointer",
        fontWeight: 'lighter',
        width: '33%',
        color: '#fff',
    },
    attribute_hover: {
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        cursor: "pointer"
    },
    number: {
        position: "absolute",
        right: "0",
        bottom: "0",
        fontSize: "0.8em",
        paddingRight: "5px",
        color: "#999"
    },
    label: {
        position: "absolute",
        left: "3px",
        top: "1px",
        fontSize: "0.9em",
        fontWeight:500,
        color: "#ccc"
    },
    labelGreen: {
        position: "absolute",
        left: "3px",
        top: "1px",
        fontWeight:500,
        fontSize: "0.9em",
        color: "yellowgreen"
    },
    data: {
        position: "absolute",
        right: "0px",
        top: "1px",
        fontSize: "0.8em",
        color: "#ccc"
    },
    value: {
        lineHeight: "38px",
        textAlign: "center",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontWeight:500,
        textOverflow: "ellipsis",
        maxWidth: "167px",
        margin: "auto",
        padding: '4px 4px 0',
        color: '#fff',
    },
    buttonWhite: {
        padding: '0',
        margin: 0,
        width: '20px',
        height: '20px',
        fontSize: '18px',
        color: '#ccc',
    },
    buttonWrapper: {
        width: '20px',
        height: '20px',
        padding:0,
    },
}


const styleBig = {
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    attribute: {
        boxSizing: "border-box",
        borderRight: "1px solid rgba(255, 255, 255, 0.2)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        height: "50px",
        position: "relative",
        outline: "none",
        cursor: "pointer",
        fontWeight: 'lighter',
        width: '33%',
        color: '#fff',
    },
    attribute_hover: {
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        cursor: "pointer"
    },
    number: {
        position: "absolute",
        right: "0",
        bottom: "0",
        fontWeight:500,
        fontSize: "0.9em",
        paddingRight: "5px",
        color: "#999"
    },
    label: {
        position: "absolute",
        left: "3px",
        top: "1px",
        fontWeight:500,
        fontSize: "0.9em",
        color: "#ccc"
    },
    labelGreen: {
        position: "absolute",
        left: "3px",
        top: "1px",
        fontSize: "0.8em",
        color: "yellowgreen"
    },
    data: {
        position: "absolute",
        right: "0px",
        top: "1px",
        fontSize: "0.8em",
        color: "#ccc"
    },
    value: {
        lineHeight: "52px",
        textAlign: "center",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontWeight:500,
        textOverflow: "ellipsis",
        maxWidth: "167px",
        margin: "auto",
        padding: '4px 4px 0',
        color: '#fff',
    },
    buttonWhite: {
        padding: '0',
        margin: 0,
        width: '20px',
        height: '20px',
        fontSize: '18px',
        color: '#ccc',
    },
    buttonWrapper: {
        width: '20px',
        height: '20px',
        padding:0,
    },
}

const bigScreen = typeof window !== 'undefined' && window.innerHeight > 750;
const styles = bigScreen ? styleBig : styleSmall;


export default StyleGrid;
