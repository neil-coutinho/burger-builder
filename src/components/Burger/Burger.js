import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import styles from "./Burger.module.css";

const burger = () => {
    return (
        <div className={styles.Burger}>
            <Ingredient type="bread-top"></Ingredient>
            <Ingredient type="cheese"></Ingredient>
            <Ingredient type="bacon"></Ingredient>
            <Ingredient type="meat"></Ingredient>
            <Ingredient type="bread-bottom"></Ingredient>
        </div>
        
    )
}

export default burger;