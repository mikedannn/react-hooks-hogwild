import { useState } from "react";


function Hog({hog}) {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div onClick={handleClick} class="pigTile">
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.specialty}></img>
            {clicked ? <p>Specialty: {hog.specialty}</p> : null}
            {clicked ? <p>Greased: {hog.greased ? "All greasy!" : "Not greased!"}</p> : null}
            {clicked ? <p>Weight: {hog.weight}</p> : null}
            {clicked ? <p>Highest Medal Achieved: {hog['highest medal achieved']}</p> : null}
        </div>
    )
}

export default Hog;