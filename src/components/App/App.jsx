import React from 'react';
import Header from './../Header/Header.jsx';
import './App.css';
import SearchBox from '../SearchBox/searchBox';
import ResultContainer from './../ResultContainer/ResultContainer';

const name = require('@rstacruz/startup-name-generator');

 class App extends React.Component{

    state = {
        headerText : "Name Gusser",
        headerExpanded : true,
        suggestedNames : [],
    }

    handleInputChange = (inputText) => {
        this.setState({
            suggestedNames : inputText? name(inputText) : [],
            headerExpanded : inputText.length>0 ? false : true,
        })
    }

     render(){
        return(
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}/>
                <SearchBox handleInputChange={this.handleInputChange}/>
                <ResultContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        )
     }
 }

 export default App;