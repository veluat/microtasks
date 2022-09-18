import React, {useState, MouseEvent} from 'react';
import './App.css';
import MapTask from "./micro/MapTask";
import TopCars from "./micro/MapCars";

import UseStateTask from "./micro/UseStateTask";
import FilterTask from "./micro/FilterTask"
import ButtonTask from "./micro/ButtonTask";
import {Button} from "./micro/Button";

function App() {


    return (
        <div className="App">
             <MapTask cars={TopCars}/>
            {/* {<Button/>}*/}
            {/*<UseStateTask/>*/}
            {/* <FilterTask/>*/}

        </div>
    );
}

export default App;
