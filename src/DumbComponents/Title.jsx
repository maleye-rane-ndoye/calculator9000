import { useState,useEffect } from "react"
export default function Title(props){

        const [newOperationValue,setNewOperationValue] = useState(null)
        const [newResultValue,setNewResultValue] = useState(0)


    useEffect(() => {

        if(newResultValue === null) return;

        const saveInDatabase = async () => {

            const url = `http://localhost/B2/test-react/src/SmartComponents/save-result.php`;

            const data = new FormData();
    
            data.append('operation', newOperationValue);
            data.append('result', newResultValue);
    
            
    
            const request = new Request(url, {
                method: "POST",
                body: data,
            });
            
            const response = await fetch(request);
            const responseData = await response.json();

            if (responseData.ok) {
                alert(`Operation saved in database: ${responseData.operation} ${responseData.result}`);
            }

            console.log(responseData);    

        };


        saveInDatabase();

    },[newOperationValue,newResultValue])




            return(
                <div className="Title">
                    <p>Calculatore 9000</p>
                    <button onClick={() => save(props.operationValue,props.resultValue)}>save</button>
                </div>
            )

        function save(operationValue,resultValue){
        setNewOperationValue(operationValue)
        setNewResultValue(resultValue)

        }


    }