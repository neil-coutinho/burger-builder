import React from "react";
import styles from "./Sidebar.module.css";
const sidebar = (props) => {

    const sidebarClasses = [styles.sideNav];
    if(props.showSidebar) {
        sidebarClasses.push(styles.open);
    }

    return (
        <div className={sidebarClasses.join(' ')}>Sidebar will come here</div>
    )
}

export default sidebar;