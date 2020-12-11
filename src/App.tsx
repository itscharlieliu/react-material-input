import React from "react";

import "./App.css";
import Input from "./components/Input";

function App(): JSX.Element {
    return (
        <div className="App">
            <Input helperText={"test"} error label={"hello"} />
            <Input label={"world"} />
        </div>
    );
}

export default App;
