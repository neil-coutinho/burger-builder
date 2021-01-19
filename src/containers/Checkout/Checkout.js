import React from "react";
import Burger from "../../components/Burger/Burger";
const checkout = (props) => {

   
    return (
        <div>
            <Burger ingredients={props.ingredients}/>
        </div>
    );
}

export default checkout;