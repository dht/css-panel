import React from 'react'
import ColorMan from '../ColorMan/ColorMan';
import Slider from 'material-ui/Slider';
import { AttributeTypes } from '../constants/Attributes';

class ShadowMan extends React.Component {

	constructor(props) {
		super(props);

		const value = props.attribute.original_value;
		//console.log('start -> ', value);

		this.state = {
			slider1: 0,
			slider2: 0,
			slider3: 0,
			slider4: 0,
			color: '#333'
		};

		this.onChange = this.onChange.bind(this);
		this.valueChange = this.valueChange.bind(this);

		const bigScreen = window.innerHeight > 750;
		this.styles = bigScreen ? styleBig : styleSmall;
	}

	shouldComponentUpdate(nextProps, nextState) {

		//console.log('ShadowMan updating -> ', true);
		return true;

	}

	refresh() {

		const { slider1, slider2, slider3, slider4, color } = this.state;

		let output;

		switch (this.props.attribute.attributeType) {

			case AttributeTypes.HORIZONTAL_VERTICAL_BLUR_SPREAD_COLOR:
				output = `${slider1}px ${slider2}px ${slider3}px ${slider4}px ${color}`;
				break;
			case AttributeTypes.HORIZONTAL_VERTICAL_BLUR_COLOR:
				output = `${slider1}px ${slider2}px ${slider3}px ${color}`;
				break;
			case AttributeTypes.WIDTH_BORDERTYPE_COLOR:
				output = `${slider1}px solid ${color}`;
				break;
		}

		this.props.valueChange(output, true);
		//console.log('output -> ', output);
	}

	onChange(ev, value, index) {

		let newState = {};
		newState["slider" + index] = value;
		this.setState(newState);

		this.refresh();
	}

	valueChange(value) {

		this.setState({
			color: value
		})

		this.refresh();
	}

	//componentWillReceiveProps(nextProps) {
	//	console.log('componentWillReceiveProps -> ', nextProps);
	//
	//	if (nextProps.attribute.original_value !== this.state.value) {
	//
	//		const value = parseInt(nextProps.attribute.original_value, 10);
	//
	//		this.setState({
	//			value: value
	//		});
	//	}
	//}

	renderSlider(index, code) {

		const value = this.state["slider" + index];

		return (
			<div style={this.styles.sliderRow}>
				<div style={this.styles.sliderLabel}>{code}</div>
				<div style={this.styles.sliderWrapper}>
					<Slider onChange={(ev, value) => this.onChange(ev, value, index)} value={value} step={1.0}
							min={-20.0} max={20.0}/>
				</div>
				<div style={this.styles.sliderLabel}>{value}px</div>
			</div>
		)
	}

	renderSliders() {
		switch (this.props.attribute.attributeType) {

			case AttributeTypes.HORIZONTAL_VERTICAL_BLUR_SPREAD_COLOR:
				return (
					<div style={this.styles.sliders}>
						{ this.renderSlider(1, 'HOR') }
						{ this.renderSlider(2, 'VER') }
						{ this.renderSlider(3, 'BLUR') }
						{ this.renderSlider(4, 'SPR') }
					</div>
				)
				break;
			case AttributeTypes.HORIZONTAL_VERTICAL_BLUR_COLOR:
				return (
					<div>
						{ this.renderSlider(1, 'HOR') }
						{ this.renderSlider(2, 'VER') }
						{ this.renderSlider(3, 'BLUR') }
					</div>
				)
				break;
			case AttributeTypes.WIDTH_BORDERTYPE_COLOR:
				return (
					<div>
						{ this.renderSlider(1, 'WID') }
					</div>
				)
				break;
		}
	}

	render() {

		return (
			<div>

				{ this.renderSliders() }


				<div style={this.styles.container}>
					<ColorMan attribute={this.props.attribute} onChange={this.valueChange}/>
				</div>
			</div>

		)
	}
}

const styleBig = {
	container: {
		display: "flex",
		flexWrap: "wrap",
		borderTop: "1px solid rgba(255, 255, 255, 0.2)",
		borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
		position: 'relative',
		justifyContent: 'center',
	},
	sliderRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: 'center',
		height: '64px',
	},
	sliderLabel: {
		width: "50px",
		fontSize: "16px",
		color: "#999",
		textAlign: 'center',
	},
	sliderWrapper: {
		flex: 1,
		alignSelf: 'flex-start',
		position: 'relative',
	},
	attribute: {
		flex: "1 0 14%",
		boxSizing: "border-box",
		borderRight: "1px solid rgba(255, 255, 255, 0.2)",
		borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
		height: "50px",
		position: "relative",
		outline: "none",
		cursor: "pointer"
	},
	attribute_hover: {
		backgroundColor: "rgba(0, 0, 0, 0.03)",
		cursor: "pointer"
	},
	number: {
		position: "absolute",
		right: "0",
		top: "0",
		fontSize: "0.8em",
		paddingRight: "5px",
		color: "#bbb"
	},
	value: {
		lineHeight: "52px",
		textAlign: "center",
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		maxWidth: "167px",
		marginTop: "-1px",
		paddingTop: "0px",
		margin: "auto"
	}
}

const styleSmall = {
	container: {
		display: "flex",
		flexWrap: "wrap",
		borderTop: "1px solid rgba(255, 255, 255, 0.2)",
		borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
		position: 'relative',
		justifyContent: 'center',
	},
	sliderRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: 'center',
		height: '44px',
	},
	sliderLabel: {
		width: "50px",
		fontSize: "14px",
		color: "#999",
		textAlign: 'center',
		position:'relative',
		top:'10px',
	},
	sliders: {
		top:'-7px',
		position:'relative'
	},
	sliderWrapper: {
		flex: 1,
		alignSelf: 'flex-start',
		position: 'relative',
	},
	attribute: {
		flex: "1 0 14%",
		boxSizing: "border-box",
		borderRight: "1px solid rgba(255, 255, 255, 0.2)",
		borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
		height: "50px",
		position: "relative",
		outline: "none",
		cursor: "pointer"
	},
	attribute_hover: {
		backgroundColor: "rgba(0, 0, 0, 0.03)",
		cursor: "pointer"
	},
	number: {
		position: "absolute",
		right: "0",
		top: "0",
		fontSize: "0.8em",
		paddingRight: "5px",
		color: "#bbb"
	},
	value: {
		lineHeight: "52px",
		textAlign: "center",
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		maxWidth: "167px",
		marginTop: "-1px",
		paddingTop: "0px",
		margin: "auto"
	}
}




export default ShadowMan;
