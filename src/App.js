import './App.css';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <div className="App">
       <Layout><p>props.children</p></Layout>
    </div>
  );
}

export default App;
