import React, {useState, MouseEvent} from 'react';
import './App.css';
import MapTask from "./micro/MapTask";
import TopCars from "./micro/MapCars";

import UseStateTask from "./micro/UseStateTask";
import FilterTask from "./micro/FilterTask"
import ButtonTask from "./micro/ButtonTask";
import {ButtonForButtonTask} from "./micro/ButtonForButtonTask";
import {MessageTask} from "./micro/MessageTask";
import {FullInput} from "./micro/FullInput";

function App() {


    return (
        <div className="App">
            {/* <MapTask cars={TopCars}/>*/}
            {/* {<ButtonForButtonTask/>}*/}
            {/*<UseStateTask/>*/}
             {/*<FilterTask/>*/}

            <MessageTask/>

        </div>
    );
}

export default App;
