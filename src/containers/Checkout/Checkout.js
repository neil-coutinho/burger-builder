import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
class Checkout extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        ingredients: new Map()
    }

    componentDidMount() {
        console.log(this.props);
    }

    cancelHandler = () => {
        console.log(this.props.history);
    }


    render() {
        return (
            <div>
               <Burger ingredients={this.state.ingredients}/>
                <button onClick={this.cancelHandler}>Cancel</button>
            </div>
        )  
    }
   
   
}

export default Checkout;