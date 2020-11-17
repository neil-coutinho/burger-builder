import react, { Component } from "react"; 
import Aux from "../../Aux";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div><Burger/></div>
                <div>Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;