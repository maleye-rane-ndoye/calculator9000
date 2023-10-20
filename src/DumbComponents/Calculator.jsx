import Title from "./Title"
import BeautifulScreen from "./BeautifulScreen";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import EqualButton from "./EqualButton";
import { useState } from "react";

export default function Calculator(){
    const [ operationValue, setOperationValue ] = useState(''); // returns eg. '22+3'
    const [ resultValue, setResultValue ] = useState(0); // returns eg. 25
    
    

    return(
        <div className="calculator">
            <> 
                
                <Title operationValue={operationValue} resultValue={resultValue} />
                <BeautifulScreen  onResult={(resultValue) => setResultValue(resultValue)} operationValue={operationValue}/>
                
                <NumberButton 
                    onClick={(numberValue) => setOperationValue(operationValue + numberValue)} 
                    onClearClick={() => setOperationValue('')}
                    onDeleteClick={() => setOperationValue(operationValue.substring(0, operationValue.length - 1))}
                />
                
                <OperatorButton onClick={(operatorValue) => setOperationValue(operationValue + operatorValue)}/>
                <EqualButton onClick={(equalValue) => setOperationValue(operationValue + equalValue)}/>

            </>
            
        </div>
    )
}