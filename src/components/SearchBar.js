import React, { Component } from 'react';
//import response from '../mock/response.json';
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
    let data;
    let updateProducts = this.props.updateProductsFromSearch;
    function reqListener () {
      console.log(this.responseText);
      data = JSON.parse(this.responseText);
      console.log(data);
      updateProducts(data.searchresultgroups[0].products.product);
    }
    var request = new XMLHttpRequest();
    request.addEventListener("load", reqListener);
    request.open("GET", `https://api.macys.com/v4/catalog/search?searchphrase=${this.state.searchText}`);
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('x-macys-webservice-client-id','h4ckathon');
    request.send();
    console.log('fire enter event, this is where the api call would be made');
      // this.props.updateProductsFromSearch(data.searchresultgroups[0].products.product);
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
