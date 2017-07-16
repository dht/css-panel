import {AttributeTypes} from '../constants/Attributes';

export const parseStyle = (style, key, value, attributeType) => {

    if (key === 'width') {
        style['flex'] = ''
    }

    if (key === 'backgroundImage' && value && (value + '').indexOf('url(') < 0) {
        style['backgroundImage'] = 'url(' + value.substr(0, 300) + ')';
    } else if (attributeType === AttributeTypes.PIXELS &&
        value &&
        (value + '').indexOf('px') < 0 &&
        (value + '').indexOf('%') < 0 &&
        (value + '').indexOf('em') < 0 &&
        (value + '').indexOf('rem') < 0 &&
        (value + '').indexOf('vw') < 0
    ) {
        style[key] = style[key] + 'px';
    }

    return style;
}