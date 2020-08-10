import React from 'react';
import classes from './DeleteButton.module.css'

const DeleteButton = (props) => {
    return (
        <div onClick={props.onclickFunc} className={classes.delete}>
            <span></span>
            <span></span>
        </div>
    );
}

export default DeleteButton;