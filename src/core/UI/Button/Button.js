import React from 'react';

import './Button.css';

export default (props) => {
    let classToUse = '';
    if (props.type === 'danger') {
        classToUse = 'danger'
    }

    return (
        <button className={classToUse} {...props}>{props.label}</button>
    )
}