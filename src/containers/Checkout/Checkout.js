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
        console.log(this.props.location.search)
        console.log()
        const ingredients = new Map();
        const queryParams = new URLSearchParams(this.props.location.search);
        for(let [key, value] of queryParams.entries()) {
            ingredients.set(key, parseInt(value))
        }

        this.setState({
            ingredients,
        })

        console.log(ingredients)
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