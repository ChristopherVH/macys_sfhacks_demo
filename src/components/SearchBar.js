import React from 'react';

class SearchBar extends React.Component {
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
      console.log('fire enter event');
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
