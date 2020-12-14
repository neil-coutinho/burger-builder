import React from "react";
import Aux from "../../Aux";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidebar from "../Navigation/Sidebar/Sidebar";

const layout = (props) => {

    return (
        // <div className="Layout"> => wrapping el to allow ajacent JSX
        <Aux>
           <Toolbar/>
           <Sidebar/>
            <main className={styles.main}>
                <BurgerBuilder/>
            </main>
        </Aux>
            
        // </div>
        
    );
};

export default layout;