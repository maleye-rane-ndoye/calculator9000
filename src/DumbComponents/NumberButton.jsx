export default function NumberButton(props){

    return(
        <div className="NumberButton">
            <button className="btn-Number" onClick={() => props.onClick(1)}>1</button>
            <button className="btn-Number" onClick={() => props.onClick(2)}>2</button>
            <button className="btn-Number" onClick={() => props.onClick(3)}>3</button>
            <button className="btn-Number" onClick={() => props.onClick(4)}>4</button>
            <button className="btn-Number" onClick={() => props.onClick(5)}>5</button>
            <button className="btn-Number" onClick={() => props.onClick(6)}>6</button>
            <button className="btn-Number" onClick={() => props.onClick(7)}>7</button>
            <button className="btn-Number" onClick={() => props.onClick(8)}>8</button>
            <button className="btn-Number" onClick={() => props.onClick(9)}>9</button>
            <button className="btn-clear" onClick={() => props.onClearClick()}>C</button>
            <button className="btn-Number" onClick={() => props.onClick(0)}>0</button>
            <button className="btn-delete" onClick={() => props.onDeleteClick()}>D</button>
        </div>
    )


}