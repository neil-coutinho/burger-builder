import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
       <div className="App">
          <Layout><p>props.children</p></Layout>
        </div>
    </Router>
   
  );
}

export default App;
