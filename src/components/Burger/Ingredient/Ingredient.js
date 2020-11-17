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
        case "bread-bottom":
            content =   <div className={styles.BreadBottom}>
                    
                        </div>
            break;
        case "meat":
            content =   <div className={styles.Meat}>
                    
                        </div>
            break;
        case "cheese":
            content =   <div className={styles.Cheese}>
                    
                        </div>
            break;
        case "salad":
            content =   <div className={styles.Salad}>
                    
                        </div>
            break;
        case "bacon":
            content =   <div className={styles.Bacon}>
                    
                        </div>
            break;
        default:
            content = null;
    }
    return content;
}

export default ingredient;