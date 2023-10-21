import { NavLink } from "react-router-dom"
export default function Menu(){


    return(
       <div className="Menu">
            <div className="Menu-btn"><NavLink to="/">Calculator</NavLink></div>
            <div className="Menu-btn"><NavLink to="/AllCalculs">AllCalculs</NavLink></div>
            <div className="Menu-btn"><NavLink to="/React">React</NavLink></div>
       </div>


    )
}