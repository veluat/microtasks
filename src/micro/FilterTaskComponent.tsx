import React, {MouseEvent, useState} from "react";
import {FilterType} from "./FilterTask";
import FilterTask from "./FilterTask";

type FilterTaskComponentType = {
    moneyList: Array<MoneyListType>,
    currentButton: (filter: FilterType) => void

}

type MoneyListType = {
    banknote: string,
    nominal: number,
    number: string
}

const FilterTaskComponent = (props: FilterTaskComponentType) => {
    return (
        <>
            <ul>
                {props.moneyList.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.currentButton('all')}>all</button>
                <button onClick={() => {
                    props.currentButton('rubles')
                }}>rubles
                </button>
                <button onClick={() => props.currentButton('dollars')}>dollars</button>
            </div>
        </>
    )
}

export default FilterTaskComponent;
