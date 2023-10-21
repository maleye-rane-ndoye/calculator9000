export default function OperatorButton(props){
    return(
        <div className="OperatorButton">
            <button className="btn-operator" onClick={() => props.onClick("+")}>+</button>
            <button className="btn-operator" onClick={() => props.onClick("-")}>-</button>
            <button className="btn-operator" onClick={() => props.onClick("*")}>x</button>
            <button className="btn-operator" onClick={() => props.onClick("/")}>/</button>
        </div>
    )
}

