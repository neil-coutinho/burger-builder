import react, { Component } from "react"; 
import Aux from "../../Aux";
import Burger from "../../components/Burger/Burger";
import Controls from "../../components/Controls/Controls";
import styles from "./BurgerBuilder.module.css";
class BurgerBuilder extends Component {

    constructor() {
        super()
        const burger = new Map();
        burger.set('salad', 1);
        burger.set('bacon', 2);
        burger.set('meat', 2);

        this.state = {
            ingredients : burger
        }


    }


    render() {
     
        return (
            <Aux>
                <div className={styles.burgerBuilder}>
                    <div className={styles.burgerPreview}><Burger ingredients={this.state.ingredients}/></div>
                    <div className={styles.burgerControls}><Controls/></div>
                </div>   
                
            </Aux>
        );
    }
}

export default BurgerBuilder;