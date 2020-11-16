import React from "react";
import styles from "./Ingredient.module.css";

const ingredient = (props) => {
    let content = null;
    switch (props.type) {
        case "bread-top":
            content =   <div className={styles.BreadTop}>
                            <div className={styles.Seeds1}></div>
                            <div className={styles.Seeds2}></div>
                        </div>
            break;
        default:
            content = null;
    }
    return content;
}

export default ingredient;