import './App.css';
import Checkout from './containers/Checkout/Checkout';
// import ProductDetail from './components/ProductDetail' 
import { Route, Switch } from 'react-router-dom';
// import ProductComponents from './components/ProductComponents'
// import ProductListing from './components/ProductListing'
import Layout from './components/Layout/Layout'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
function App() {
    return (
        <div className = "App">
        <Layout> 
            <Switch>
            <Route path = "/checkout" component = {Checkout} />
            <Route path = "/" component = {BurgerBuilder}/>
            </Switch>
        </Layout>
        </div>
    )
}
export default App;
