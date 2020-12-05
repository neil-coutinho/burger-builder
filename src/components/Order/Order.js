import React from "react";
import Aux from "../../Aux";

const orderSummary = (props) => {

    let summary = [];

    //console.log(props)

    summary = Array.from(props.order, ([key, value]) => ({key, value}))
                .map(({key, value}) => {
                    return <li key={ `ing_${key}` }>{key} - {value}</li>
                });
    //console.log(summary)
    
    return (<Aux>
                <ul> 
                    {summary} 
                </ul> 
            </Aux>)    
   

       


    
}

export default orderSummary;