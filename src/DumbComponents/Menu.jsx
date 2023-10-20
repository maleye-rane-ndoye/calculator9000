import { NavLink } from "react-router-dom"
export default function Menu(){


    return(
       <div>
            <button><NavLink to="/">Calculator</NavLink></button>
            <button><NavLink to="/AllCalculs">AllCalculs</NavLink></button>
            <button><NavLink to="/React">React</NavLink></button>
       </div>


    )
}