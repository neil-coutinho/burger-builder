import react, { Component } from "react"; 
import Aux from "../../Aux";
import Burger from "../../components/Burger/Burger";
import Controls from "../../components/Controls/Controls";
import styles from "./BurgerBuilder.module.css";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/Order/Order";
class BurgerBuilder extends Component {

    constructor(props) {
        super(props)
        const burger = new Map();
        let price = 0;
        burger.set('salad', 1);
        burger.set('bacon', 2);
        burger.set('meat', 2);


        this.state = {
            ingredients : burger,
            totalPrice: 0,
            orderButtonDisabled: true
           
        }

        this.priceList = [
            { price: 1 , type: "meat" },
            { price: 0.2 , type: "cheese" },
            { price: 0.1 , type: "salad" },
            { price: 1.3 , type: "bacon" },
        ]

        price = this.getTotalPrice(burger);

        const isDisabled = this.updateOrderButtonState(burger);

        this.setState({ ingredients : burger, totalPrice: price, orderButtonDisabled: isDisabled});

    }


    updateOrderButtonState(ingredients) {
        let count = 0;

        count = Array.from(ingredients, ([key, value]) => value).reduce((acc, value) => {
            acc +=value;
            return acc;
        }, count);

       

        if(count == 0) {
            return true;
        }

        return false;
    }

    addIngredientHandler = (type) => {
        let oldCount = 0;
        let price = 0;
      
        const ingredients = this.state.ingredients;
        
        if(ingredients.has(type)) {
            oldCount = ingredients.get(type);
        } 

       const updatedCount = oldCount + 1;
       const updatedIngredients = new Map(ingredients);
       updatedIngredients.set(type, updatedCount);
       
       //calculate total price
       price = this.getTotalPrice(updatedIngredients);

       const isDisabled = this.updateOrderButtonState(updatedIngredients);

       this.setState({ingredients: updatedIngredients, totalPrice: price, orderButtonDisabled: isDisabled});

      

    }


    removeIngredientHandler = (type) => {
        let oldCount = 0;
        let price = 0;
        const ingredients = this.state.ingredients;

        if(ingredients.has(type)) {
            oldCount = this.state.ingredients.get(type);
        } 
        
        let updatedCount = oldCount;
        if(oldCount > 0) {
            updatedCount -= 1;
        }

        const updatedIngredients = new Map(this.state.ingredients);
        updatedIngredients.set(type, updatedCount);

      
         //calculate total price
         price = this.getTotalPrice(updatedIngredients);

         const isDisabled = this.updateOrderButtonState(updatedIngredients);

         this.setState({ingredients: updatedIngredients, totalPrice: price, orderButtonDisabled: isDisabled});
    }

    getTotalPrice(ingredients) {
        let total = 0;
        
        for(const[key, count] of ingredients) {
           let itemPrice = this.priceList.filter(({price, type}) => type === key).map(({price}) => price);
           let ingredientCost = 0;
           if(itemPrice) {
            ingredientCost = (itemPrice * count);
           }

           total += ingredientCost;
        }
       
        return total.toFixed(2);

    }


    

    render() {
     
        return (
            <Aux>

                <Modal><OrderSummary order={this.state.ingredients}/></Modal>


                <div className={styles.burgerBuilder}>
                    <div className={styles.burgerPreview}><Burger ingredients={this.state.ingredients}/></div>
                    <div className={styles.burgerControls}>
                        <Controls
                        orderButtonDisabled={this.state.orderButtonDisabled} 
                        totalPrice = {this.state.totalPrice}
                        addIngredientHandler={ this.addIngredientHandler } 
                        removeIngredientHandler={this.removeIngredientHandler}  ingredients={this.state.ingredients}/></div>
                </div>   
                
            </Aux>
        );
    }
}

export default BurgerBuilder;