import './App.css';
import Layout from './components/Layout/Layout';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
          <Layout>
            <Switch>
                <Route path="/checkout" component={Checkout}></Route>
                <Route path="/" exact render={(props) => <BurgerBuilder {...props}/>}></Route>
            </Switch>
           </Layout>
        </div>
    </BrowserRouter>
       
  
   
  );
}

export default App;
