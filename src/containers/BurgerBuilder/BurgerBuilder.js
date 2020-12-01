import react, { Component } from "react"; 
import Aux from "../../Aux";
import Burger from "../../components/Burger/Burger";
import Controls from "../../components/Controls/Controls";
import styles from "./BurgerBuilder.module.css";
class BurgerBuilder extends Component {

    constructor(props) {
        super(props)
        const burger = new Map();
        burger.set('salad', 1);
        burger.set('bacon', 2);
        burger.set('meat', 2);

        this.state = {
            ingredients : burger
        }


    }

    addIngredientHandler = (type) => {
        let oldCount = 0;
      
        const ingredients = this.state.ingredients;
        
        
        if(ingredients.has(type)) {
            oldCount = this.state.ingredients.get(type);
        } 

       const updatedCount = oldCount + 1;
       const updatedIngredients = new Map(this.state.ingredients);
       updatedIngredients.set(type, updatedCount);
        
       this.setState({ingredients: updatedIngredients});

      

    }


    removeIngredientHandler = (type) => {
        let oldCount = 0;
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

        this.setState({ingredients: updatedIngredients});
    }

    

    render() {
     
        return (
            <Aux>
                <div className={styles.burgerBuilder}>
                    <div className={styles.burgerPreview}><Burger ingredients={this.state.ingredients}/></div>
                    <div className={styles.burgerControls}>
                        <Controls addIngredientHandler={ this.addIngredientHandler } 
                        removeIngredientHandler={this.removeIngredientHandler}  /></div>
                </div>   
                
            </Aux>
        );
    }
}

export default BurgerBuilder;