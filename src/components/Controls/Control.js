import React from "react";
import styles from "./Control.module.css";
const control = (props) => {
    return (
        <div className={styles.controlWrapper}>
           <div className={styles.controlItem}>
                <button>-</button>
                <span>{props.name}</span>
                <button onClick={props.addIngredientHandler}>+</button>
           </div>
        </div>
    )


}

export default control;