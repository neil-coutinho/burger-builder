import React from "react";
import Aux from "../../Aux";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import styles from "./Layout.module.css";
import Checkout from "../../containers/Checkout/Checkout";


const layout = (props) => {
    const ingredients = new Map();
    ingredients.set('meat',1);
    return (
        // <div className="Layout"> => wrapping el to allow ajacent JSX
        <Aux>
            <div className={styles.toolbar}>Toolbar, Sidebar</div>
            <main className={styles.main}>
                <BurgerBuilder/>
                <Checkout ingredients={ingredients}/>
            </main>
        </Aux>
            
        // </div>
        
    );
};

export default layout;