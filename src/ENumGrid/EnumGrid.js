import React from 'react'

class EnumGrid extends React.Component {

	constructor(props) {
		super(props);

		const options = this.props.options.map(option => {return {title: option, value: option}});

		this.state = {
			options: options
		};
	}

	//shouldComponentUpdate(nextProps, nextState) {
	//
	//	console.log('pixelgrid updating -> ', true);
	//	return true;
	//
	//}

	select(option) {
		//console.log('option -> ', option);
		this.props.optionsSelected(option);
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

	render() {

		let { options } = this.state;

		return (

				<div style={style.container}>
					{options.map((option, index) => {
						return (
							<div key={index + 1} style={style.attribute} onClick={() => this.select(option)}
								 className={'hover'}>
								<div style={style.number}>
									{index + 1}
								</div>
								<div style={style.value}>
									{option.title}
								</div>
							</div>);
					})}
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
		fontWeight:'lighter',
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		maxWidth: "167px",
		marginTop: "-1px",
		paddingTop: "0px",
		margin: "auto",
        color:'#ccc',
    }
}

export default EnumGrid;
