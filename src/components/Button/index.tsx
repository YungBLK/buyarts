// packages
import React from 'react';

// styles
import "./button.scss";


interface ButtonProprieties {
    type: "button" | "submit" | "reset" | undefined;
    buttonClass: "cta-primary" | "cta-secondary" | "teste" | undefined;
    text: string;
}

function Button (props: ButtonProprieties) {
    const { type, buttonClass, text } = props;

    return(
        <button type={type} className={buttonClass}>
            {text}
        </button>
    )
}

export default Button;
