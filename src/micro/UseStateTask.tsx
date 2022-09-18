import React, {useState} from 'react';

function UseStateTask() {
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
        console.log((a));
    }
    const onClickDelete = () => {
        setA(0)
        console.log((a));
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickDelete}>0</button>
        </div>
    );
}

export default UseStateTask;