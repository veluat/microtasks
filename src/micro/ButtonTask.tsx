import React from 'react';
import "../App";
import {Button} from "./Button";

type ButtonTaskType = {
    name: string
    callBack: () => void
}
const ButtonTask = (props: ButtonTaskType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div className={'App'}>
            <button onClick={onClickHandler}>{props.name}</button>

        </div>
    );
}

export default ButtonTask;
