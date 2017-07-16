import React from 'react'
import { SketchPicker, SwatchesPicker } from 'react-color';

class ColorMan extends React.Component {

	constructor(props) {
		const value = props.attribute.original_value;

		//console.log('constructor -> ', true);

		super(props);
		this.state = {
			value: value
		};
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(color) {
		//console.log('event.target.value -> ', color);

		if (color.source === 'hex') {
			this.props.onChange(color.hex, true);
		} else {
			const rgba = 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')';
			this.props.onChange(rgba, true);
		}

	}

	shouldComponentUpdate(nextProps, nextState) {

		return false;

	}


	render() {
		const {colors} = this.props;

		return (
			<div style={style.container}>
				<div style={style.sketch}>
				<SketchPicker
					presetColors={colors}
					color={ this.state.value }
					onChangeComplete={ this.handleChange }/>
					</div>

			</div>
		)
	}
}

const style = {
	container: {
		display:'flex',
		flexDirection:'column',
		alignItems:'center',
	},
	sketch: {
		margin:'20px',
	},
	swatches: {
		margin: '20px'
	}
}

export default ColorMan;

