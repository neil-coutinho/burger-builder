import react, { Component } from "react"; 
import Aux from "../../Aux";
import Burger from "../../components/Burger/Burger";
import Controls from "../../components/Controls/Controls";
import styles from "./BurgerBuilder.module.css";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/Order/Order";
import axios from "../../axios.config";
import Spinner from "../../components/Spinner/Spinner";
import errorComponent from "../../components/ErrorComponent/ErrorComponent"
class BurgerBuilder extends Component {

    constructor(props) {
        super(props)
        const burger = new Map();

        this.ingredientList = [
            { name: "Meat" , type: "meat" },
            { name: "Cheese" , type: "cheese" },
            { name: "Salad" , type: "salad" },
            { name: "Bacon" , type: "bacon" },
        ]
      
        this.state = {
            ingredients : burger,
            totalPrice: 0,
            orderButtonDisabled: true,
            orderInProgress: false,
            orderSaveInProgress: false
           
        }

        this.priceList = [
            { price: 1 , type: "meat" },
            { price: 0.2 , type: "cheese" },
            { price: 0.1 , type: "salad" },
            { price: 1.3 , type: "bacon" },
        ]

       
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


    orderNow = () => {
        this.setState({orderInProgress: true});
       
    }

    dismiss() {
        this.setState({orderInProgress: false});
    }

    onOrderHandler = async () => {
        console.log('Order Handler', this.state)

        const {ingredients , totalPrice} = this.state;

        const selectedIngredients = Array.from(ingredients, ([key, value]) => ({key: key, value: value}));
       

        const customerInfo = {
            address: "123 Kad Lane"
        }

        const data = {
            ingredients: selectedIngredients,
            totalPrice,
            customerInfo
            
        }

        this.setState({orderSaveInProgress: true})

       const response =  await axios.post('orders.json', data).catch((e) => {
           console.log('something went wrong'); 
         
           return false;
        });

        this.setState({orderSaveInProgress: false, orderButtonDisabled: false, orderInProgress: false});
       console.log({response})
    }
    

    render() {

        let modal = <OrderSummary onOrderHandler={this.onOrderHandler} order={this.state.ingredients} totalPrice = {this.state.totalPrice} ingredientList={this.ingredientList}/>
        if(this.state.orderSaveInProgress) {
            modal =   <Spinner />
        }
        return (
            <Aux>

                <Modal show={this.state.orderInProgress} dismiss={this.dismiss.bind(this)}>
                    {modal}
                </Modal>


                <div className={styles.burgerBuilder}>
                    <div className={styles.burgerPreview}>
                    <Burger ingredients={this.state.ingredients}/></div>
                    <div className={styles.burgerControls}>
                        <Controls
                        ingredientList={this.ingredientList}
                        orderButtonDisabled={this.state.orderButtonDisabled} 
                        orderNow = { this.orderNow }
                        totalPrice = {this.state.totalPrice}
                        addIngredientHandler={ this.addIngredientHandler } 
                        removeIngredientHandler={this.removeIngredientHandler}  ingredients={this.state.ingredients}/>
                    </div>
                </div>   
                
            </Aux>
        );
    }
}

export default errorComponent(BurgerBuilder, axios);