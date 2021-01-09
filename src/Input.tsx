import React, { ForwardedRef, MutableRefObject, useRef } from "react";

import styles from "./styles/Input.module.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    helperText?: string;
    label?: string;
    error?: boolean;
    textArea?: boolean;
}

const Input = React.forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element {
    const { helperText, label, error, textArea, className, ...otherProps } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const hasValue = !!(inputRef.current && inputRef.current.value);

    const inputProps = {
        ref: (node: HTMLInputElement) => {
            // Refs are not necessarily objects with a current property. They can also be functions.
            // We need to write your code so that it can work with both variations.
            (inputRef as MutableRefObject<HTMLElement | null>).current = node;
            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                (ref as MutableRefObject<HTMLElement | null>).current = node;
            }
        },

        className: styles.input__element,
        ...otherProps,
    };

    return (
        <label className={`${styles.input} ${error ? styles["input--error"] : ""} ${className ? className : ""}`}>
            <span className={`${styles.input__label} ${hasValue ? styles["input__label--minimized"] : ""}`}>
                {label}
            </span>
            <div className={`${styles.input__container}`}>
                <input {...inputProps} />
            </div>
            <span className={styles.input__helperText}>{helperText}</span>
        </label>
    );
});

export default Input;
