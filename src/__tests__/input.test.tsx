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

        const component = renderer.create(<Input />).toJSON();
        expect(component).toMatchSnapshot("base");
    });

    it("renders when input contains text", () => {
        // TODO snapshot is not showing showing input label minimized
        const component = renderer.create(<Input value={"test"} />);
        expect(component).toMatchSnapshot("withValue");
    });
});
