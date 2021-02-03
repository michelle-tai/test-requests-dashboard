import React from 'react';

const timeFilterTypes = ["1 hour", "6 hours", "12 hours", "1 day", "1 week", "Custom"];

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedRequest: null, 
            requestArray: [],
            searchTerm: "",
            currentFilter: ""
        }
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);

    }

    handleSearchSubmit(e){
        alert(this.state.searchTerm);
    }
    handleTermChange(e){
        console.log(e);
        this.setState({searchTerm: e.target.value});
    }

    handleFilterChange(e){
        // alert(e.target.value);
        this.setState({currentFilter: e.target.value}, () => {
            console.log(this.state.currentFilter); //is asynch, so not putting it as callback made the previous state print 
        });
        
    }

    render(){
        return(
            <div className="container search">
                Requests
                <form onSubmit={this.handleSearchSubmit}>
                    <input type="text" placeholder="Search by ID" onChange={this.handleTermChange}/>
                    <input type="submit" value="Go"/> 
                </form>
                <br/>
                <div className="row-container">
                    {timeFilterTypes.map(timeFilter => {
                        return <button className="button-class" onClick={this.handleFilterChange} value={timeFilter} key={timeFilter}>{timeFilter}</button>
                    })}
                </div>                
            </div>
        );
    }

    // componentWillMount


}