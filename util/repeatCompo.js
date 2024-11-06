import { createElement } from 'react';

/* I just write it for fun 😉 */

export function repeatCompo(size, compo, transformList) {

    return Array.from(Array(size), (_, i) => {
        const copyCompo = createElement(compo.type, (() => {
            const transforms = transformList.split(' ');
            const props = { key: i };

            for (const prop in compo.props) props[prop] = compo.props[prop];

            transforms.forEach((transform) => props[transform] = props[transform](i));
    
            return props;
        })());

        return copyCompo;
    });
}


