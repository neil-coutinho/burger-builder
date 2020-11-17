import react, { Component } from "react"; 
import Aux from "../../Aux";
import Burger from "../../components/Burger/Burger";
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
                <div><Burger ingredients={this.state.ingredients}/></div>
                <div>Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;