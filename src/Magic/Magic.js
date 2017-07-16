import React from 'react'
import TextField from 'material-ui/TextField';

class Magic extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			originalValue: props.value || '',
			value: props.value || '',
			hint: 'enter value'
		};

		this.timer = null;

		this.handleChange = this.handleChange.bind(this);
		this.keyDown = this.keyDown.bind(this);
	}

	handleChange(event) {
		//console.log('event -> ', event, event.nativeEvent);

		this.setState({value: event.target.value});
	}

	keyDown(ev) {
		let value, delta;

		switch (ev.keyCode) {
			case 13:
				this.props.valueChange(this.state.value);
				break;
			case 38:
				value = parseInt(this.state.value, 10) || 0;
				delta = ev.shiftKey ? 10 : 1;
				this.setState({value: value + delta});
				ev.preventDefault();
				break;
			case 27:
				this.props.escapePressed();
				ev.preventDefault();
				break;
			case 40:
				value = parseInt(this.state.value) || 0;
				delta = ev.shiftKey ? 10 : 1;
				this.setState({value: value - delta});
				ev.preventDefault();
				break;
			default:
				setTimeout(() => {
					// this.props.valueChange(this.refs.magicInput.input.value, true);
				}, 0);

		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== this.state.originalValue) {
			this.setState({
				originalValue: nextProps.value,
				value: nextProps.value
			});

			clearTimeout(this.timer);
			this.timer = setTimeout(() => {
				if (nextProps.element_id !== -1) {
					this.focus();
				}
			}, 50);
		}

		if (nextProps.attribute !== this.state.attribute) {

			this.setState({
				attribute: nextProps.attribute,
				hint: 'enter value'
			});

			if (nextProps.attribute.value) {
				this.setState({
					value: nextProps.attribute.value
				})
			}

			clearTimeout(this.timer);
			this.timer = setTimeout(() => {
				if (nextProps.element_id !== -1 && nextProps.attribute.key) {
					this.focus();
				}
			}, 50);
		}


	}

	focus() {
		this.refs.magicInput.select();
		this.refs.magicInput.focus();
	}

	render() {
		const { hint, value } = this.state;

		return (
			<TextField
				inputStyle={styles.text}
				ref="magicInput"
				onFocus={this.props.onFocus}
				onBlur={this.props.onBlur}
				hintStyle={ styles.white }
				hintText={ hint }
				value={ value || '' }
				onKeyDown={ this.keyDown }
				onChange={ this.handleChange }
			/>
		)
	}
}


export default Magic;

const styles = {
	container: {

	},
	text: {
		fontFamily: 'Source Sans Pro, sans-serif',
		fontSize: '17px',
		color: '#2C3E50',
		fontWeight:'normal',
	},
	white: {
		color:'#ccc',
		fontWeight:'lighter',
	}
}
