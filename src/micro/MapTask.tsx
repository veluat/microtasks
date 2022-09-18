import React from 'react';

type TopCarsType = {
    manufacturer: string,
    model: string
}

type MapTaskType = {
    cars: TopCarsType[]
}

const MapTask: React.FC<MapTaskType> = (props) => {
    return (
        <table>{props.cars.map((car, index) =>
            <tbody key={index}>
            <tr>
                <td>{index + 1}</td>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
            </tr>
            </tbody>
        )}
        </table>
    )
}

export default MapTask;

