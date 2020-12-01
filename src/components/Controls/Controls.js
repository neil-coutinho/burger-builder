import React from "react";
import Control from "./Control";
import Aux from "../../Aux";

const controls = (props) => {

    const controlList = [
        { name: "Meat" , type: "meat" },
       { name: "Cheese" , type: "cheese" },
        { name: "Salad" , type: "salad" },
        { name: "Bacon" , type: "bacon" },
    ]

    const ctrls = controlList.map(({name, type}, index) => <Control name={name} type={type} key={ `ctrl_${index}` } 
    addIngredientHandler={() => {props.addIngredientHandler(type)}}
    removeIngredientHandler={() => {props.removeIngredientHandler(type)}}></Control>)

    return (
       <Aux>
           { ctrls } 
       </Aux>
    )
}

export default controls;