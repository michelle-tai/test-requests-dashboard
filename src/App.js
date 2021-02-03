import React from 'react';
import './App.css';
import RequestList from './RequestList';
import Search from './Search';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            selectedRequest: null, 
            requestArray: [],
            searchTerm: "",
            currentFilter: ""
        };
        this.searchSubmit = this.searchSubmit.bind(this);
        this.termChange = this.termChange.bind(this);
        this.filterChange = this.filterChange.bind(this);
        this.handleSelectedRequestItem = this.handleSelectedRequestItem.bind(this);
    }

    searchSubmit(e){
        e.preventDefault();
        alert(this.state.searchTerm);
    }
    termChange(e){
        console.log(e);
        this.setState({searchTerm: e.target.value});
    }

    filterChange(e){
        // alert(e.target.value);
        this.setState({currentFilter: e.target.value}, () => {
            console.log(this.state.currentFilter); //is asynch, so not putting it as callback made the previous state print 
        });
    }

    handleSelectedRequestItem(e){
        // console.log(e.target.text);
        this.setState({selectedRequest: e.target.text}, () => {
            console.log(this.state.selectedRequest);
        })
    }
        
        
    render(){
        return (
            <div className="App">
                <div className="container sidebar">
                    <h1>Requests</h1>
                    <Search searchSubmit={this.searchSubmit} termChange={this.termChange} filterChange={this.filterChange}/>
                    <RequestList selectedRequestItem={this.handleSelectedRequestItem}/>
                </div>
                <div className="container detail">
                    {this.state.searchTerm} <br></br>
                    {this.state.selectedRequest}
                </div>
            </div>
          );
    }
}
