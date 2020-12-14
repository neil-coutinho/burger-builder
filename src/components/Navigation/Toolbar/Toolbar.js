import React from "react";
import styles from "./Toolbar.module.css";
const toolbar = (props) => {
    return (

        <header className={styles.mainNav}>
            <div className={styles.hamburgerIcon} onClick={props.toggleSidebar}>
                <span></span>
            </div>
           
            Header will come here
        </header>

    )
}

export default toolbar;