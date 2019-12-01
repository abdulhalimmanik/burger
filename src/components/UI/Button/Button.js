import React from 'react';

import './Button.css';
const classes = {
    Button: 'Button'
}
const button = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.Button, props.btnType].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;