import './App.css';
import Layout from './components/Layout/Layout';
import { Switch, Route } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

function App() {
  return (
   
       <div className="App">
          <Layout>
            <Switch>
                <Route path="/checkout" component={Checkout}></Route>
                <Route path="/" exact><BurgerBuilder/></Route>
            </Switch>
           </Layout>
        </div>
  
   
  );
}

export default App;
