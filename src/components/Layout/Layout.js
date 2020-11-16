import React from "react";
import Aux from "../../Aux";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import styles from "./Layout.module.css";

const layout = (props) => {

    return (
        // <div className="Layout"> => wrapping el to allow ajacent JSX
        <Aux>
            <div className={styles.toolbar}>Toolbar, Sidebar</div>
            <main className={styles.main}>
                <BurgerBuilder/>
            </main>
        </Aux>
            
        // </div>
        
    );
};

export default layout;