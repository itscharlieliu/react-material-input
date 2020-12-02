import React from "react";
import styles from "./styles/Input.module.css"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    helperText?: string;
    label?: string;
    width?: number;
    error?: boolean;
}

// const Input = React.forwardRef(function Input(props: InputProps, ref: Ref<HTMLInputElement>): JSX.Element {
const Input = (): JSX.Element => {
    return (
        <label className={styles.inputContainer}>
            test
            <input/>
        </label>
    );
};

export default Input;