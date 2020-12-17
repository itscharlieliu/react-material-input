import React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    helperText?: string;
    label?: string;
    error?: boolean;
}
