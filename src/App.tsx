import React from "react";

import "./App.css";
import Input from "./components/Input";

function App(): JSX.Element {
    return (
        <div className="App">
            <Input helperText={"test"} />
            <Input />
        </div>
    );
}

export default App;
