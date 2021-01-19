import React from "react";
import Control from "./Control";
import Aux from "../../Aux";

const controls = (props) => {

   

   
    
    const ctrls = props.ingredientList.map(({name, type}, index) => {

        let count = 0;
        if(props.ingredients.has(type)) {
            count = props.ingredients.get(type);
        }

        return  <Control 
        name={name} 
        type={type} 
        key={ `ctrl_${index}` }
        count={ count }
        addIngredientHandler={() => {props.addIngredientHandler(type)}}
        removeIngredientHandler={() => {props.removeIngredientHandler(type)}}></Control>
    })

    return (
       <Aux>
           <p>Total Price: <strong>{ props.totalPrice }</strong></p>
           { ctrls } 

           <p>
              
           <button disabled={props.orderButtonDisabled} onClick={props.orderNow}>ORDER NOW</button>
           </p>
           
       </Aux>
    )
}

export default controls;