import { useState,useEffect } from "react"
export default function AllCalculs(){

    const[data,setData] = useState([])

    useEffect(() => {
    
       const getFromDataBase = async () =>{

        const url = `http://localhost/B2/test-react/src/SmartComponents/get-result.php`;

        const request = new Request(url);
        const response = await fetch(request);
        const responseData = await response.json();
        console.log(responseData);

        setData(responseData.data)


       }

       getFromDataBase();

    },[])
    return(
        <div className="AllCalculs">
            <h1>All Calculs</h1>
            <ul className="Table">
                <li className="Head">
                    <h2>Operations</h2>
                    <h2>Results</h2>
                </li>
                {data.map((item) => {

                    return(

                    <li key={item.id} className="body">
                        <p>{item.operationValue}</p>
                        <p>{item.resultValue}</p>
                    </li> 
                    )


                })}

            </ul>



        </div>
    )
}