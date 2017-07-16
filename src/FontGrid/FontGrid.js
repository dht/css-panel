import React from 'react'

const isRTL = false;

class FontGrid extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			options: props.fonts
		};
	}

	//shouldComponentUpdate(nextProps, nextState) {
	//
	//	console.log('fontgrid updating -> ', true);
	//	return true;
	//
	//}

	select(option) {
		//console.log('option -> ', option);
		this.props.optionsSelected(option);
	}

	style(option) {
		return {...style.value, fontFamily: option.value, direction: isRTL ? 'rtl' : 'ltr',};
	}

	render() {

		let {options} = this.state;

		//console.log('options -> ', options);


		return (
			<div>
				<div style={style.container}>
					{options.map((option, index) => {
						return (
							<div key={index + 1} style={style.attribute} onClick={() => this.select(option)}
								 className={'hover'}>
								<div style={style.number}>
									{index + 1}
								</div>
								<div style={style.label}>
									{option.title}
								</div>
								<div style={this.style(option)}>
									{this.props.sentence}
								</div>
							</div>);
					})}
				</div>
			</div>

		)
	}
}

const style = {
	container: {
		display: "flex",
		flexWrap: "wrap",
		borderTop: "1px solid rgba(255, 255, 255, 0.2)",
		borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
		position: 'relative',
	},
	attribute: {
		flex: "1 0 100%",
		boxSizing: "border-box",
		borderRight: "1px solid rgba(255, 255, 255, 0.2)",
		borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
		height: "60px",
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
	label: {
		position: "absolute",
		left: "3px",
		top: "1px",
		fontSize: "0.8em",
		color: "gray"
	},
	value: {
		lineHeight: "62px",
		textAlign: "center",
		fontSize: "1.2em",
		marginTop: "-1px",
		fontWeight: 'lighter',
		paddingTop: "0px",
		margin: "auto",
		color:'#ccc',
	}
}

export default FontGrid;
