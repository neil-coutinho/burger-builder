import React from "react";
import styles from "./Modal.module.css";
import Aux from "../../Aux";
const modal = (props) => {

    return (
        <Aux>
            {props.show ? <div className={styles.backdrop} onClick={ props.dismiss }></div> : null}
            <div className={styles.modal} style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show? '1': '0'
            }}>
                { props.children }
            </div>
        </Aux>
        
    ) 
}

export default modal;