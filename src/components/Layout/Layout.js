import React from "react";
import Aux from "../../Aux";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import styles from "./Layout.module.css";
import Checkout from "../../containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";


const layout = (props) => {
    const ingredients = new Map();
    ingredients.set('meat',1);
    return (
        // <div className="Layout"> => wrapping el to allow ajacent JSX
        <Aux>
            <div className={styles.toolbar}>Toolbar, Sidebar</div>
            <main className={styles.main}>
                <Switch>
                    <Route path="/checkout"><Checkout ingredients={ingredients}/></Route>
                    <Route path="/" exact><BurgerBuilder/></Route>
                </Switch>
               
              
                
            </main>
        </Aux>
            
        // </div>
        
    );
};

export default layout;