import React, { Component } from 'react';
import response from '../mock/response.json';
import '../styles/SearchBar.css'

class SearchBar extends Component {
  constructor(){
    super();
    this.state = {
      searchText: ''
    };
    this.handleInputChange = this .handleInputChange.bind(this);
    this.handleKeyPress = this .handleKeyPress.bind(this);
  }
  handleInputChange(event){
    this.setState({searchText: event.target.value});
  }
  handleKeyPress(event){
    if (event.key === "Enter"){
      // fetch(`https://api.macys.com/v4/catalog/search?searchphrase=${this.state.searchText}`, {
      //   headers: {
      //     "x-macys-webservice-client-id": "h4ckathon",
      //     "Accept": "application/json"
      //   }
      // })
      // .then(function(response) {
      //   this.props.updateProductsFromSearch(response.searchresultgroups[0].products.product);
      // }).catch(function(error) {
      //   console.log(error)
      // })
      this.props.updateProductsFromSearch(response.searchresultgroups[0].products.product);
      console.log('fire enter event, this is where the api call would be made');
    }
  }
  render(){
    return (
      <div className="search-bar">
        <input type="text" value={this.state.searchText} onKeyPress={this.handleKeyPress} onChange={this.handleInputChange}/>
      </div>
    );
  }
}

export default SearchBar;
