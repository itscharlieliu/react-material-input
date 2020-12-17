import React, { ForwardedRef, MutableRefObject, useRef, useState } from "react";

import styles from "./styles/Input.module.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    helperText?: string;
    label?: string;
    error?: boolean;
}

const Input = React.forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element {
    const [value, setValue] = useState("");

    const { helperText, label, error, className, ...otherProps } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const hasValue = !!(inputRef.current && inputRef.current.value) || value;
    return (
        <label className={`${styles.input} ${error ? styles["input--error"] : ""} ${className ? className : ""}`}>
            <span className={`${styles.input__label} ${hasValue ? styles["input__label--minimized"] : ""}`}>
                {label}
            </span>
            <div className={`${styles.input__container}`}>
                <input
                    ref={(node: HTMLInputElement) => {
                        // Refs are not necessarily objects with a current property. They can also be functions.
                        // We need to write your code so that it can work with both variations.
                        (inputRef as MutableRefObject<HTMLDivElement | null>).current = node;
                        if (typeof ref === "function") {
                            ref(node);
                        } else if (ref) {
                            (ref as MutableRefObject<HTMLDivElement | null>).current = node;
                        }
                    }}
                    className={styles.input__element}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
                    {...otherProps}
                />
            </div>
            <span className={styles.input__helperText}>{helperText}</span>
        </label>
    );
});

module.exports = Input;
