import React from 'react';
import Fonts from '../constants/Fonts_latin';
import IconButton from 'material-ui/IconButton';
import Commander from '../Commander/Commander';
import Magic from '../Magic/Magic';
import ColorMan from '../ColorMan';
import ShadowMan from '../ShadowMan';
import FontGrid from '../FontGrid';
import StyleGrid from '../StyleGrid';
import EnumGrid from '../ENumGrid';

import Attributes, {AttributeTypes, AttributeEnums} from '../constants/Attributes';
import {parseStyle} from '../_utils/attributes';

export default class StylePanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            styleId: props.styleId,
            value: null,
            attribute: {key: '', attributeType: ''},
        }

        this.optionsSelected = this.optionsSelected.bind(this);
        this.commandSelected = this.commandSelected.bind(this);
        this.valueChange = this.valueChange.bind(this);
        this.saveValue = this.saveValue.bind(this);
        this.resetValue = this.resetValue.bind(this);
        this.clear = this.clear.bind(this);
        this.keyReset = this.keyReset.bind(this);

        this.renderHelper = this.renderHelper.bind(this);

        this.delayedState = this.delayedState.bind(this);

        this.renderPanel = this.renderPanel.bind(this);
        this.focusOnCommander = this.focusOnCommander.bind(this);
    }

    componentDidMount() {
        const {styleId} = this.props;

        this.setState({
            styleId
        });
    }

    componentWillReceiveProps(props) {
        const {styleId, regainFocus} = props;

        if (this.state.styleId !== styleId) {
            this.setState({styleId});

            if (regainFocus) {
                this.focusOnCommander();
            }
        }
    }

    optionsSelected(option) {
        this.valueChange(option.value, true);
    }

    keyReset(key) {

        if (!key) {
            return;
        }

        let style = {};
        style[key] = '';
        if (this.props.applyStyle) {
            this.props.applyStyle(style);
        }

    }

    commandSelected(command) {
        if (this.props.selectAttribute) {
            this.props.selectAttribute(command);
        }

        let originalValue = this.props.elementStyle[command] || '';

        let newState = {
            value: originalValue,
            originalValue: originalValue,
        };

        const attribute = Attributes[command];

        if (attribute.type) {
            newState.attribute = {
                key: attribute.key,
                attributeType: attribute.type
            };
        }

        this.setState(newState);
    }

    clear() {
        if (this.props.clearAttribute) {
            this.props.clearAttribute();
        }

        this.setState({
            value: '',
            originalValue: '',
            attribute: {key: '', attributeType: ''},
        });

        this.focusOnCommander();
    }

    focusOnCommander() {
        setTimeout(() => {
            document.querySelector('input[placeholder="attribute [shift]"]').focus()
        }, 100);
    }

    valueChange(value, dontClear) {
        const {elementStyle} = this.props;
        const {attribute} = this.state;
        let {key, attributeType} = attribute;

        if (!key) {
            return;
        }

        let newStyle = {};
        newStyle[key] = value;
        newStyle = parseStyle(newStyle, key, value, attributeType);

        this.setState({
            value: value,
            style: {...elementStyle, ...newStyle}
        });

        if (this.props.previewStyle) {
            this.props.previewStyle(newStyle);
        }

        if (!dontClear) {
            if (this.props.applyStyle) {
                this.props.applyStyle(newStyle);
            }
            this.clear();
        }
    }

    saveValue() {
        this.valueChange(this.state.value, false);
    }

    resetValue() {
        const {attribute, originalValue} = this.state;

        if (attribute.key) {

            let style = {};
            style[attribute.key] = originalValue;

            if (this.props.previewStyle) {
                this.props.previewStyle(style);
            }
        }

        this.clear();
    }

    renderStyleGrid() {
        const {styleId, elementStyle, readonly} = this.props;

        return <div style={styles.helperPanel}>
            {styleId ? <StyleGrid
                elementStyle={elementStyle} commandSelected={this.commandSelected}
                keyReset={this.keyReset}
                readonly={readonly}
            /> : null}
        </div>
    }

    renderHelper() {
        const {colors, fonts, hideStyleGrid, styleId} = this.props;
        const {attribute} = this.state;

        const {attributeType} = attribute;
        const {focusOnAttribute} = this.state;

        if (focusOnAttribute) {
            return this.renderStyleGrid()
        }

        switch (attributeType) {

            case AttributeTypes.COLOR:
                return <div style={styles.helperPanel}>
                    <ColorMan attribute={attribute}
                              colors={colors}
                              onChange={this.valueChange}/></div>;

            case AttributeTypes.STRING_FONT_FAMILY:
                return <div style={styles.helperPanel}>
                    <FontGrid sentence={"Fox jumped over the moon"}
                              fonts={fonts || Fonts}
                              optionsSelected={this.optionsSelected}/></div>;

            case AttributeTypes.HORIZONTAL_VERTICAL_BLUR_SPREAD_COLOR:
            case AttributeTypes.HORIZONTAL_VERTICAL_BLUR_COLOR:
                return <div style={styles.helperPanel}>
                    <ShadowMan attribute={attribute}
                               valueChange={this.valueChange}/></div>;

            case AttributeTypes.ENUM_FONT_WEIGHT:
            case AttributeTypes.ENUM_BACKGROUNDSIZE:
            case AttributeTypes.ENUM_DISPLAY:
            case AttributeTypes.ENUM_FLEXALIGNCONTENT:
            case AttributeTypes.ENUM_FLEXALIGNITEMS:
            case AttributeTypes.ENUM_FLEXALIGNSELF:
            case AttributeTypes.ENUM_FLEXDIRECTION:
            case AttributeTypes.ENUM_FLEXJUSTIFYCONTENT:
            case AttributeTypes.ENUM_FLEXWRAP:
            case AttributeTypes.ENUM_TEXTALIGN:
            case AttributeTypes.ENUM_FONT_STYLE:
            case AttributeTypes.ENUM_BACKGROUNDPOSITION:
            case AttributeTypes.ENUM_BACKGROUNDREPEAT:
            case AttributeTypes.ENUM_POSITION:
            case AttributeTypes.ENUM_OVERFLOW:

                const options = AttributeEnums[attributeType];

                return (
                    <div style={styles.helperPanel}><EnumGrid attribute={attribute}
                                                              optionsSelected={this.optionsSelected}
                                                              options={ options }/>
                    </div>)
            default:

                if (styleId && !hideStyleGrid) {
                    return this.renderStyleGrid()
                }

        }

    }

    delayedState(state, delay = 200) {
        setTimeout(() => {
            this.setState(state);
        }, delay);
    }

    renderPanel() {
        const {iconName = 'select_all', readonly} = this.props;

        if (readonly) {
            return null;
        }

        return <div style={ styles.rowContainer }>
            <div style={ styles.commander }>
                <Commander placeholder={'attribute [shift]'}
                           onFocus={() => this.delayedState({focusOnAttribute: true})}
                           onBlur={() => this.delayedState({focusOnAttribute: false})}
                           attribute={this.state.attribute}
                           commandSelected={this.commandSelected}/>
            </div>
            <Magic style={styles.magic} attribute={this.state.attribute}
                   value={this.state.value}
                   onFocus={() => this.setState({focusOnValue: true})}
                   onBlur={() => this.setState({focusOnValue: false})}
                   escapePressed={ this.resetValue }
                   valueChange={this.valueChange}/>

            <IconButton iconStyle={styles.buttonWhite} onClick={this.saveValue}
                        style={ styles.buttonWrapper }
                        title="Save value (Enter)"
                        iconClassName="material-icons">
                done
            </IconButton>

            <IconButton iconStyle={styles.buttonWhite} onClick={this.resetValue}
                        style={ styles.buttonWrapper }
                        iconClassName="material-icons">
                close
            </IconButton>
            <div style={ styles.icon }>
                <i className="material-icons">{ iconName }</i>
            </div>
        </div>
    }

    render() {

        return (
            <div style={ styles.container }>

                {this.renderPanel()}
                {this.renderHelper()}

            </div>
        );
    }
}
const styles = {
    container: {},
    rowContainer: {
        display: 'flex',
        padding: '10px',
    },
    buttonWhite: {
        color: '#2C3E50',
        fontSize: '18px'
    },
    commander: {
        marginTop: '5px',
        flex: 1,
    },
    buttonWrapper: {},
    magic: {
        marginLeft: '5px',
        flex: 1,
    },
    icon: {
        padding: '15px 10px 0px 0',
    },
    helperPanel: {
        marginTop: 10,
        backgroundColor: '#2C3E50',
    }
}
