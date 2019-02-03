import React from 'react';
import './errorMessage.css';
import gif from './error.gif';

const ErrorMessage = () => {
    return (
        <>
            <img src={gif} alt='error'></img>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;