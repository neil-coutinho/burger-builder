import React, { useReducer } from "react";
import Aux from "../../Aux";

const orderSummary = (props) => {

    let summary = [];

    //console.log(props)
    const getIngredientName = (key, ingredients) => {
        //console.log({key, ingredients})
        let ingredient = ingredients.filter(({name, type}) => type == key)
                                    .reduce((acc, {name='', type=''}) => {
                                        acc = name;
                                        return acc;
                                    } ,'');
        return ingredient;
       
    }

    summary = Array.from(props.order, ([key, value]) => ({ key, value }))
        .map(({ key, value }) => {

            const ingredient = getIngredientName(key, props.ingredientList)
            //console.log({ingredient})

            return <li key={`ing_${key}`}>{ingredient} x{value}</li>
        });
    //console.log(summary)

    return (<Aux>
        <h3>Order Summary</h3>
        <p>You have created an order with the following ingredients:</p>
        <ul>
            {summary}
        </ul>
        <p><strong>Total Price: {props.totalPrice}</strong></p>
    </Aux>)






}

export default orderSummary;