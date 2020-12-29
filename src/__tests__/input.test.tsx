import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import Input from "../Input";
import React from "react";

describe("input tests", () => {
    let container: null | HTMLDivElement = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("input");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        container && unmountComponentAtNode(container);
        container && container.remove();
        container = null;
    });

    it("renders without crashing", () => {
        act(() => {
            render(<Input />, container);
        });
    });
});
