export const AttributeTypes = {
	NONE: "NONE",
	TOP_RIGHT_BOTTOM_LEFT: "TOP_RIGHT_BOTTOM_LEFT",
	PIXELS: "PIXELS",
	NUMBER: "NUMBER",
	COLOR: "COLOR",
	STRING_FONT_FAMILY: "STRING_FONT_FAMILY",
	ENUM_FONT_WEIGHT: "ENUM_FONT_WEIGHT",
	IMAGE_URL: "IMAGE_URL",
	WIDTH_BORDERTYPE_COLOR: "WIDTH_BORDERTYPE_COLOR",
	HORIZONTAL_VERTICAL_BLUR_SPREAD_COLOR: "HORIZONTAL_VERTICAL_BLUR_SPREAD_COLOR",
	HORIZONTAL_VERTICAL_BLUR_COLOR: "HORIZONTAL_VERTICAL_BLUR_COLOR",
	ENUM_BACKGROUNDSIZE: "ENUM_BACKGROUNDSIZE",
	ENUM_BACKGROUNDREPEAT: "ENUM_BACKGROUNDREPEAT",
	ENUM_BACKGROUNDPOSITION: "ENUM_BACKGROUNDPOSITION",
	ENUM_DISPLAY: "ENUM_DISPLAY",
	ENUM_FLEXDIRECTION: "ENUM_FLEXDIRECTION",
	ENUM_FLEXWRAP: "ENUM_FLEXWRAP",
	ENUM_FLEXJUSTIFYCONTENT: "ENUM_FLEXJUSTIFYCONTENT",
	ENUM_FLEXALIGNITEMS: "ENUM_FLEXALIGNITEMS",
	ENUM_FLEXALIGNCONTENT: "ENUM_FLEXALIGNCONTENT",
	ENUM_FLEXALIGNSELF: "ENUM_FLEXALIGNSELF",
	ENUM_TEXTALIGN: "ENUM_TEXTALIGN",
	ENUM_FONT_STYLE: "ENUM_FONT_STYLE",
	ENUM_POSITION:"ENUM_POSITION",
	ENUM_OVERFLOW:"ENUM_OVERFLOW",
	LIST_ICONS:"LIST_ICONS",
	GRADIENT:"GRADIENT",
}

export const AttributeEnums = {
	ENUM_BACKGROUNDSIZE: ['cover', 'contain', '100% 100%'],
	ENUM_BACKGROUNDREPEAT: ['repeat', 'no-repeat'],
	ENUM_BACKGROUNDPOSITION: ['center top', 'center center', 'center bottom', 'left top', 'left center', 'left bottom', 'right top', 'right center', 'right bottom'],
	ENUM_FONT_WEIGHT: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
	ENUM_DISPLAY: ['block', 'none'],
	ENUM_FLEXDIRECTION: ['row', 'column'],
	ENUM_FLEXWRAP: ['nowrap', 'wrap'],
	ENUM_FLEXJUSTIFYCONTENT: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'],
	ENUM_FLEXALIGNITEMS: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
	ENUM_FLEXALIGNCONTENT: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'],
	ENUM_FLEXALIGNSELF: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
	ENUM_TEXTALIGN: ['left', 'center', 'right', 'auto'],
	ENUM_FONT_STYLE: ['normal', 'italic'],
	ENUM_POSITION: ['static', 'block', 'absolute', 'fixed'],
	ENUM_OVERFLOW: ['visible', 'hidden']
}

export const AttributeGroups = {
	DIMENSIONS: 'DIMENSIONS',
	FONT: 'FONT',
	COLOR: 'COLOR',
	BACKGROUND: 'BACKGROUND',
	BORDER: 'BORDER',
	BOX: 'BOX',
	POSITION: 'POSITION',
	FLEX: 'FLEX',
}

export default {
	width: {
		key: 'width',
		index: 1,
		hint: '150px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.DIMENSIONS,
	},
	height: {
		key: 'height',
		index: 2,
		hint: '100px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.DIMENSIONS
	},
	color: {
		key: 'color',
		index: 12,
		hint: '#rrggbb | rgb | rgba',
		type: AttributeTypes.COLOR,
		group:AttributeGroups.BACKGROUND
	},
	backgroundColor: {
		key: 'backgroundColor',
		index: 13,
		hint: '#rrggbb | rgb | rgba',
		type: AttributeTypes.COLOR,
		group:AttributeGroups.BACKGROUND
	},
	backgroundImage: {
		key: 'backgroundImage',
		index: 14,
		hint: 'url',
		type: AttributeTypes.IMAGE_URL,
		group:AttributeGroups.BACKGROUND
	},
	backgroundSize: {
		key: 'backgroundSize',
		index: 15,
		hint: 'cover',
		type: AttributeTypes.ENUM_BACKGROUNDSIZE,
		group:AttributeGroups.BACKGROUND
	},
	backgroundRepeat: {
		key: 'backgroundRepeat',
		index: 16,
		hint: 'repeat',
		type: AttributeTypes.ENUM_BACKGROUNDREPEAT,
		group:AttributeGroups.BACKGROUND
	},
	backgroundPosition: {
		key: 'backgroundPosition',
		index: 17,
		hint: 'center',
		type: AttributeTypes.ENUM_BACKGROUNDPOSITION,
		group:AttributeGroups.BACKGROUND
	},
	iconName: {
		key: 'iconName',
		index: 50,
		hint: 'center',
		type: AttributeTypes.LIST_ICONS,
		group:AttributeGroups.BACKGROUND
	},
	gradient: {
		key: 'gradient',
		index: 51,
		hint: 'two colors',
		type: AttributeTypes.GRADIENT,
		group:AttributeGroups.BACKGROUND
	},
	fontSize: {
		key: 'fontSize',
		index: 4,
		hint: '22px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.FONT
	},
	fontFamily: {
		key: 'fontFamily',
		index: 5,
		hint: 'font family name',
		type: AttributeTypes.STRING_FONT_FAMILY,
		group:AttributeGroups.FONT
	},
	fontWeight: {
		key: 'fontWeight',
		index: 6,
		hint: "normal, bold, 100-900",
		options: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
		type: AttributeTypes.ENUM_FONT_WEIGHT,
		group:AttributeGroups.FONT
	},
	fontStyle: {
		key: 'fontStyle',
		index: 7,
		hint: "italic",
		options: ['normal', 'italic'],
		type: AttributeTypes.ENUM_FONT_STYLE,
		group:AttributeGroups.FONT
	},
	textAlign: {
		key: 'textAlign',
		index: 8,
		hint: "center",
		options: ['left', 'center', 'right', 'auto'],
		type: AttributeTypes.ENUM_TEXTALIGN,
		group:AttributeGroups.FONT
	},
	lineHeight: {
		key: 'lineHeight',
		index: 9,
		hint: "20px",
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.FONT
	},
	flex: {
		key: 'flex',
		hint: '1',
		index: 42,
		type: AttributeTypes.NUMBER,
		group:AttributeGroups.FLEX
	},
	order: {
		key: 'order',
		hint: '1',
		index: 43,
		type: AttributeTypes.NUMBER,
		group:AttributeGroups.FLEX
	},
	border: {
		key: 'border',
		index: 19,
		hint: '1px solid #48aaee',
		type: AttributeTypes.WIDTH_BORDERTYPE_COLOR,
		group:AttributeGroups.BORDER
	},
	borderRadius: {
		key: 'borderRadius',
		index: 20,
		hint: '10px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.BORDER
	},

	boxShadow: {
		key: 'boxShadow',
		index: 18,
		hint: '0px 0px 10px 20px #49087',
		type: AttributeTypes.HORIZONTAL_VERTICAL_BLUR_SPREAD_COLOR,
		group:AttributeGroups.BACKGROUND
	},
	textShadow: {
		key: 'textShadow',
		index: 10,
		hint: '0px 0px 10px #5897a3',
		type: AttributeTypes.HORIZONTAL_VERTICAL_BLUR_COLOR,
		group:AttributeGroups.FONT

	},
    padding: {
        key: 'padding',
        index: 25,
        hint: 'top right bottom left',
        type: AttributeTypes.TOP_RIGHT_BOTTOM_LEFT,
        group:AttributeGroups.BOX
    },
	paddingTop: {
		key: 'paddingTop',
		index: 26,
		hint: '10px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.BOX
	},
	paddingRight: {
		key: 'paddingRight',
		index: 27,
		hint: '10px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.BOX
	},
	paddingBottom: {
		key: 'paddingBottom',
		index: 28,
		hint: '10px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.BOX
	},
	paddingLeft: {
		key: 'paddingLeft',
		index: 29,
		hint: '10px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.BOX
	},
    margin: {
        key: 'margin',
        index: 30,
        hint: 'top right bottom left',
        type: AttributeTypes.TOP_RIGHT_BOTTOM_LEFT,
        group:AttributeGroups.BOX
    },
	marginTop: {
		key: 'marginTop',
		index: 31,
		hint: '10px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.BOX
	},
	marginRight: {
		key: 'marginRight',
		index: 32,
		hint: '10px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.BOX
	},
	marginBottom: {
		key: 'marginBottom',
		index: 33,
		hint: '10px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.BOX
	},
	marginLeft: {
		key: 'marginLeft',
		index: 34,
		hint: '10px',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.BOX
	},
	borderTop: {
		key: 'borderTop',
		index: 21,
		hint: '10px',
		type: AttributeTypes.WIDTH_BORDERTYPE_COLOR,
		group:AttributeGroups.BORDER
	},
	borderRight: {
		key: 'borderRight',
		index: 22,
		hint: '10px',
		type: AttributeTypes.WIDTH_BORDERTYPE_COLOR,
		group:AttributeGroups.BORDER
	},
	borderBottom: {
		key: 'borderBottom',
		index: 23,
		hint: '10px',
		type: AttributeTypes.WIDTH_BORDERTYPE_COLOR,
		group:AttributeGroups.BORDER
	},
	borderLeft: {
		key: 'borderLeft',
		index: 24,
		hint: '10px',
		type: AttributeTypes.WIDTH_BORDERTYPE_COLOR,
		group:AttributeGroups.BORDER
	},
	flexDirection: {
		key: 'flexDirection',
		index: 44,
		hint: 'flex-direction',
		options: ['row', 'row-reverse', 'column', 'column-reverse'],
		type: AttributeTypes.ENUM_FLEXDIRECTION,
		group:AttributeGroups.FLEX
	},
	flexWrap: {
		key: 'flexWrap',
		index: 45,
		hint: 'flex-wrap',
		options: ['nowrap', 'wrap', 'wrap-reverse'],
		type: AttributeTypes.ENUM_FLEXWRAP,
		group:AttributeGroups.FLEX
	},
	justifyContent: {
		key: 'justifyContent',
		index: 46,
		hint: 'flex-justify',
		options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
		type: AttributeTypes.ENUM_FLEXJUSTIFYCONTENT,
		group:AttributeGroups.FLEX
	},
	alignItems: {
		key: 'alignItems',
		index: 47,
		hint: 'flex-start',
		options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
		type: AttributeTypes.ENUM_FLEXALIGNITEMS,
		group:AttributeGroups.FLEX
	},
	alignContent: {
		key: 'alignContent',
		index: 48,
		hint: 'flex-start',
		options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
		type: AttributeTypes.ENUM_FLEXALIGNCONTENT,
		group:AttributeGroups.FLEX
	},
	alignSelf: {
		key: 'alignSelf',
		index: 49,
		hint: 'flex-start',
		options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
		type: AttributeTypes.ENUM_FLEXALIGNSELF,
		group:AttributeGroups.FLEX
	},
	letterSpacing: {
		key: 'letterSpacing',
		index: 11,
		hint: 'pixels',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.FONT
	},
	display: {
		key: 'display',
		index: 35,
		hint: 'block',
		options: ['block', 'none'],
		type: AttributeTypes.ENUM_DISPLAY,
		group:AttributeGroups.POSITION
	},
	position: {
		key: 'position',
		index: 36,
		hint: 'static',
		type: AttributeTypes.ENUM_POSITION,
		group:AttributeGroups.POSITION
	},
	top: {
		key: 'top',
		index: 37,
		hint: 'pixels',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.POSITION
	},
	right: {
		key: 'right',
		index: 38,
		hint: 'top right bottom left',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.POSITION
	},
	bottom: {
		key: 'bottom',
		index: 39,
		hint: 'top right bottom left',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.POSITION
	},
	left: {
		key: 'left',
		index: 40,
		hint: 'top right bottom left',
		type: AttributeTypes.PIXELS,
		group:AttributeGroups.POSITION
	},
	overflow: {
		key: 'overflow',
		index: 41,
		hint: 'visible or hidden',
		type: AttributeTypes.ENUM_OVERFLOW,
		group:AttributeGroups.POSITION
	},
    minWidth: {
        key: 'minWidth',
        index: 48,
        hint: '150px',
        type: AttributeTypes.PIXELS,
        group:AttributeGroups.DIMENSIONS,
    },
    minHeight: {
        key: 'minHeight',
        index: 49,
        hint: '150px',
        type: AttributeTypes.PIXELS,
        group:AttributeGroups.DIMENSIONS,
    },
}