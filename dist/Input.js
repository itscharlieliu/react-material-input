var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef, useState } from "react";
import styles from "./styles/Input.module.css";
var Input = React.forwardRef(function Input(props, ref) {
    var _a = useState(""), value = _a[0], setValue = _a[1];
    var helperText = props.helperText, label = props.label, error = props.error, className = props.className, otherProps = __rest(props, ["helperText", "label", "error", "className"]);
    var inputRef = useRef(null);
    var hasValue = !!(inputRef.current && inputRef.current.value) || value;
    return (_jsxs("label", __assign({ className: styles.input + " " + (error ? styles["input--error"] : "") + " " + (className ? className : "") }, { children: [_jsx("span", __assign({ className: styles.input__label + " " + (hasValue ? styles["input__label--minimized"] : "") }, { children: label }), void 0),
            _jsx("div", __assign({ className: "" + styles.input__container }, { children: _jsx("input", __assign({ ref: function (node) {
                        // Refs are not necessarily objects with a current property. They can also be functions.
                        // We need to write your code so that it can work with both variations.
                        inputRef.current = node;
                        if (typeof ref === "function") {
                            ref(node);
                        }
                        else if (ref) {
                            ref.current = node;
                        }
                    }, className: styles.input__element, onChange: function (event) { return setValue(event.target.value); } }, otherProps), void 0) }), void 0),
            _jsx("span", __assign({ className: styles.input__helperText }, { children: helperText }), void 0)] }), void 0));
});
module.exports = Input;
