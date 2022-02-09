import React from "react";
import './App.css';
import {Counter} from "./components/counter/Counter";
import {ThunkExample} from "./components/fetch-thunk/ThunkExample";
import {CreateFunctions} from "./components/createFunctions/CreateFunctions";

function App() {
    return (
        <div className="App">
            <h1>Redux toolkit</h1>
            <Counter/>
            <ThunkExample/>
            <CreateFunctions/>
        </div>
    );
}

export default App;
