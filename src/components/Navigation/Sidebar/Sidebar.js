import React from "react";
import styles from "./Sidebar.module.css";
const sidebar = (props) => {

    const sidebarClasses = [styles.sideNav, styles.open];

    return (
        <div className={sidebarClasses.join(' ')}>Sidebar will come here</div>
    )
}

export default sidebar;