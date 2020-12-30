import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
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

        const tree = renderer.create(<Input />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("changes color when mouse enters", () => {
        const component = renderer.create(<Input />);
    });
});
