import React from "react";
import styles from "./Spinner.module.css";

const spinner = () => {
    return (
        <div class={styles['lds-ripple']}><div></div><div></div></div>
    )
}


export default spinner