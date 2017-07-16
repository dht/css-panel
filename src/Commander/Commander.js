import React from 'react'
import Autosuggest from 'react-autosuggest';
import Attributes from '../constants/Attributes';

import insertCss from 'insert-css';
import CommanderCss from './CommanderCss';

if (typeof document !== 'undefined') {
    insertCss(CommanderCss);
}

class Commander extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			suggestions:[],
			value: '',
			attributes: Attributes
		};

		this.onChange = this.onChange.bind(this);
		this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
		this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
		this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
	}

	componentWillReceiveProps(nextProps) {

		if (nextProps.attribute !== this.state.attribute) {
			this.setState({
				value: nextProps.attribute.key
			});

			if (nextProps.attribute.key === '') {
				setTimeout(() => {
						this.focus();
				}, 150);
			}
		}
	}

	escapeRegexCharacters(str) {
		return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	attributeByNumber(attributes, number) {

		//console.log('number -> ', number);

		const single = Object.keys(attributes)
			.filter((value, index) => attributes[value].index == number);

		return single.length ? single[0] : null;
	}

	getSuggestions(value) {
		let val = (value || '').trim();
		const escapedValue = this.escapeRegexCharacters(val),
			number = parseInt(val, 10),
			isNumber = !isNaN(number) && number > 0;

		if (escapedValue === '') {
			return [];
		}

		const regex = new RegExp(escapedValue, 'i');
		let {attributes}  = this.state;
		const numberedAttribute = isNumber ? this.attributeByNumber(attributes, number) : null;

		return Object.keys(attributes)
			.map(key  => {return {...attributes[key], key}})
			.filter(attribute => regex.test(attribute.key) || (numberedAttribute && numberedAttribute == attribute.key))
			.map(attribute => {return attribute.key + '|' + attribute.index});
	}

	getSuggestionValue(suggestion) {
		return suggestion;
	}

	renderSuggestion(suggestion) {
		const parts = suggestion.split('|');

		return (
			<div>
				<span style={styles.suggestionLeft}>{parts[0]}</span>
				<span style={styles.suggestionRight}>{parts[1]}</span>
			</div>
		);
	}

	focus() {
		//this.refs.commander.input.focus();
	}

	onChange(event, { newValue, method }) {
		this.setState({
			value: newValue
		});
	}

	onSuggestionSelected(event, { suggestion, suggestionValue, sectionIndex, method }) {
		setTimeout(()=> {
			this.refs.commander.input.value = suggestion.split('|')[0];
		}, 10);

		if (method !== 'enter') {
			return;
		}

		this.props.commandSelected(suggestion.split('|')[0]);
	}

	onSuggestionsFetchRequested({ value }) {

		this.setState({
			suggestions: this.getSuggestions(value)
		});
	}

	onSuggestionsClearRequested() {
		this.setState({
			suggestions: []
		});
	}

	render() {

		const {value, suggestions} = this.state;

		const inputProps = {
			placeholder: this.props.placeholder,
			value,
			onChange: this.onChange,
            onFocus:this.props.onFocus,
            onBlur:this.props.onBlur,
		};

		return (
			<Autosuggest suggestions={suggestions}
						 ref="commander"
						 focusFirstSuggestion={true}
						 highlightFirstSuggestion={true}
						 onSuggestionSelected={this.onSuggestionSelected}
						 onSuggestionsClearRequested={this.onSuggestionsClearRequested}
						 onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
						 getSuggestionValue={this.getSuggestionValue}
						 renderSuggestion={this.renderSuggestion}
						 inputProps={inputProps}/>);
	}
}


export default Commander;

const styles = {
	suggestionLeft: {},
	suggestionRight: {
		float: 'right'
	},

}
