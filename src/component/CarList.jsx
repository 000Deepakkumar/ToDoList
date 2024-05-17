import React, { useState } from "react"

function CarList() {

    const [cars, setCar] = useState([]);
    const [carName, setname] = useState("");
    const [carYear, setyear] = useState(new Date().getFullYear())
    const [carMaker, setmaker] = useState("");
    const List = cars.map((car, index) =>
        <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.name} from Year
            {car.year} made by
            {car.maker}
        </li>)

    function handleCarName(event) {
        setname(event.target.value)
    }
    function handleCarYear(event) {
        setyear(event.target.value)
    }
    function handleCarMaker(event) {
        setmaker(event.target.value)
    }
    function handleCarAdd() {
        const newCar = { year: carYear, name: carName, maker: carMaker }
        setCar(c => [...c, newCar])
    }
    function handleRemoveCar(index) {
        setCar(cars.filter((_,i)=>i!==index))
    }

    return (<div>
        <h1>Car List</h1>
        <ul>{List}</ul>
        <input type="number" value={carYear} onChange={handleCarYear} /><br />
        <input type="text" value={carName} onChange={handleCarName} /><br />
        <input type="text" value={carMaker} onChange={handleCarMaker} /><br />
        <button onClick={handleCarAdd}>Add</button>
    </div>)
}
export default CarList