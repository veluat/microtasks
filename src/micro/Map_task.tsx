import React from 'react';

type TopCarsType = {
    manufacturer: string,
    model: string
}

type Map_taskType = {
    cars: Array<TopCarsType>
}

const Map_task: React.FC<Map_taskType> = (props) => {
    return (
        <table> {props.cars.map((car, index) =>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{car.manufacturer}</td>
                    <td>{car.model}</td>
                </tr>)}
        </table>
    )
}

export default Map_task;

