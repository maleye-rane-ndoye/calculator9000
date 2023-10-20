import ItSOverNineThousand from "../SmartComponents/ItSOverNineThousand"
import { useState,useEffect } from "react"
export default function BeautifulScreen(props){

    const [resultValue,setResultValue] = useState(0)
    const [hasError,setHasError] = useState(false)

    useEffect(() => {
        if(props.operationValue.includes('=')){
            try {

                let result = eval(props.operationValue.replace('=', ''));
                setResultValue(result);
                setHasError(false);
                props.onResult(result);
        } catch(error) {
            setHasError(true);
            
        }    
        }else if(props.operationValue === ''){
            setResultValue(0);
            setHasError(false);
        }

    },[props.operationValue])

    return(
        <div className="BeautifulScreen">
            <p className="screen-operation">{props.operationValue}</p>
            <p className="screen-result">
            {hasError ? 'Error' : (resultValue < 9000 ? resultValue:"")}
            <ItSOverNineThousand resultValue ={resultValue}/>
            </p>
        </div>
    )
}