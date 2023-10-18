import Title from "./Title";
import BeautifulScreen from "./BeautifulScreen";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import EqualButton from "./EqualButton";
import { useState } from "react";
export default function Calculator(){

    const [operationValue,setOperationValue] = useState('');
    return(

        <>
            <Title/>
            <BeautifulScreen operationValue ={operationValue}/>
            <NumberButton
                onClick ={(numberValue) => (setOperationValue(operationValue + numberValue))}
                onClearClick = {() => (setOperationValue(''))}
            />
            <OperatorButton/>
            <EqualButton/>
        
        </>


    )
}