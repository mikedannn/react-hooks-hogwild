import hogs from "../porkers_data";
import Hog from "./Hog";
import { v4 as uuid4 } from 'uuid';
import { useState } from "react";


function HogContainer() {
    const [greased, setGreased] = useState(false);
    const [sort, setSort] = useState("none");

    const filterAndSortHogs = () => {
        const filtered = hogs.filter(hog => {
            if(greased) {
                return hog.greased
            } else {
                return true
            }
        })

        if (sort === "none") {
            return filtered
        } else if (sort === "name") {
            return filtered.sort((a,b) => {
                if(a.name > b.name) {
                    return 1
                } else {
                    return -1
                }
            })
        } else {
            return filtered.sort((a,b) => {
                if(a.weight > b.weight) {
                    return 1
                } else {
                    return -1
                }
            })
        }
    }

    const renderHogs = () => {
        return filterAndSortHogs().map(hog => {
            return <Hog key={uuid4()} hog={hog}/>
        })
    }

    const handleClick = () => {
        setGreased(!greased)
    }

    const handleChange = (event) => {
        setSort(event.target.value)
    }

	return (
		<div class="ui grid container">
            <button onClick={handleClick}>{ greased ? "All hogs" : "Greased hogs only"}</button>
            <select onChange={handleChange}>
                <option>none</option>
                <option>name</option>
                <option>weight</option>
            </select>
            {renderHogs()}
		</div>
	);
}

export default HogContainer;