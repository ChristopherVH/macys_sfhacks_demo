import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Grid from './components/Grid';
import MacysLogo from './components/MacysLogo';
import './styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: []
    }
    this.updateProductsFromSearch = this.updateProductsFromSearch.bind(this);
  }
  updateProductsFromSearch(products){
    this.setState({products});
    console.log('setting product state with ', products);
  }
  render() {
    return (
      <div className="App">
        <MacysLogo/>
        <SearchBar updateProductsFromSearch={this.updateProductsFromSearch}/>
        <Grid products={this.state.products}/>
      </div>
    );
  }
}

export default App;
