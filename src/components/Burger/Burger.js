import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import styles from "./Burger.module.css";

const burger = (props) => {
    
    let ingredients = [];

    for(const [ingredient, count] of props.ingredients) {
      
        const layers =   [...Array(count)]
                                .map((_,index) => { return <Ingredient type={ingredient} key={ `${ingredient}_${index}` }></Ingredient>})
       

        ingredients = [...ingredients, ...layers]
    }
   

    if(ingredients.length == 0) {
        ingredients = <p>Only buns baby!</p>
    }

    return (
        <div className={styles.Burger}>
            <Ingredient type="bread-top"></Ingredient>
            {ingredients}
            <Ingredient type="bread-bottom"></Ingredient>
        </div>
        
    )
}

export default burger;