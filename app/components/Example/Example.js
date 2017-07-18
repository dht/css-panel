import React from 'react';
import StylePanel from '../../../src/StylePanel/StylePanel';

import './Example.scss';

export default class Example extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            elementId: 1,
            style1: {
                border: '1px solid green',
                color: 'green',
                fontFamily: 'arial',
                fontWeight: 100,
                fontSize: '16px',
                backgroundSize: 'cover',
            },
            style2: {
                backgroundColor: 'green',
                color: 'white',
                fontSize: '15px',
            }
        }
    }

    componentDidMount() {
        const {style1} = this.state;

        this.setState({
            style: style1
        })
    }

    applyStyle(newStyle) {
        const {elementId, style} = this.state;

        newStyle = {...style, ...newStyle};

        let newState = {};
        newState['style'] = newStyle;
        newState[`style${elementId}`] = newStyle;

        this.setState(newState);
    }

    previewStyle(newStyle) {
        const {elementId, style} = this.state;

        newStyle = {...style, ...newStyle};

        let newState = {};
        newState['style'] = newStyle;
        newState[`style${elementId}`] = newStyle;

        this.setState(newState);
    }

    render() {
        const {style, style1, style2, elementId, hideStyleGrid} = this.state;

        return (
            <div className="Example-container">
                <div style={styles.attributesPanel}>
                    <StylePanel
                        styleId={ elementId }
                        readonly={false}
                        elementStyle={ style }
                        hideStyleGrid={hideStyleGrid}
                        applyStyle={(style) => this.applyStyle(style)}
                        previewStyle={(style) => this.previewStyle(style)}
                        regainFocus={true}
                        iconName={'select_all'}    // select_all, text_format, image, view_column
                    />
                </div>
                <div className="guidance">
                    <div className="arrow">H</div>
                    change the attributes
                </div>

                <div style={styles.elements}>
                    <div style={{...styles.element, ...style1, ...elementId === 1 ? styles.selected : {}}}
                         onClick={() => this.setState({elementId: 1, style: style1})}>
                        Element 1 <br />
                        click to select
                    </div>
                    <div style={{...styles.element, ...style2, ...elementId === 2 ? styles.selected : {}}}
                         onClick={() => this.setState({elementId: 2, style: style2})}>
                        Element 2 <br />
                        click to select
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    attributesPanel: {
        width: '400px',
        position: 'fixed',
        top: 0,
        left: 0,
        marginLeft: '60px',
        zIndex: 999,
        backgroundColor: 'white',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        borderRadius: '1px',
    },
    elements: {
        width: '500px',
        height: '200px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginLeft: '-250px',
        marginTop: '-100px',
        display: 'flex',
        flexDirection: 'row',
    },
    element: {
        cursor: 'pointer',
        flex: 1,
        margin: '10px',
        border: '3px solid transparent',
        boxSizing:'border-box',
    },
    selected: {
        border: '3px solid red',
    }
}