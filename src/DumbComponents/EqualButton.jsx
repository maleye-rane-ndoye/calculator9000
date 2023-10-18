export default function EqualButton(props){
    return(
        <div className="EqualButton">
            <button className="btn-dote" onClick={() => props.onClick(".")}>.</button>
            <button className="btn-equal" onClick={() => props.onClick("=")}>=</button>

        </div>
    )
}