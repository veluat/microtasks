import React, {useState} from 'react';
import FilterTaskComponent from "./FilterTaskComponent";

export type FilterType = 'all' | 'dollars' | 'rubles'

type MoneyType = {
    banknote: FilterType,
    nominal: number,
    number: string
}

function FilterTask() {

    const [money, setMoney] = useState<MoneyType[]>([
        {banknote: 'dollars', nominal: 100, number: 'a1234567890'},
        {banknote: 'dollars', nominal: 50, number: 'z1234567890'},
        {banknote: 'rubles', nominal: 100, number: 'w1234567890'},
        {banknote: 'dollars', nominal: 100, number: 'e1234567890'},
        {banknote: 'dollars', nominal: 50, number: 'c1234567890'},
        {banknote: 'rubles', nominal: 100, number: 'r1234567890'},
        {banknote: 'dollars', nominal: 50, number: 'x1234567890'},
        {banknote: 'rubles', nominal: 50, number: 'v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollars')
    }
    if (filter === 'rubles') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'rubles')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <>
            <FilterTaskComponent moneyList={currentMoney} currentButton={onClickFilterHandler}/>
        </>
    );
}

export default FilterTask;
