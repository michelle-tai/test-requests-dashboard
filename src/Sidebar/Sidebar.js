import React from 'react';
import RequestList from '../RequestList';
import Search from '../Search';

const timeFilterTypes = ["1 hour", "6 hours", "12 hours", "1 day", "1 week", "Custom"];

export default class Sidebar extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         selectedRequest: null, 
    //         requestArray: [],
    //         searchTerm: "",
    //         currentFilter: ""
    //     }
    //     this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    //     this.handleTermChange = this.handleTermChange.bind(this);
    //     this.handleFilterChange = this.handleFilterChange.bind(this);

    // }

    // handleSearchSubmit(e){
    //     alert(this.state.searchTerm);
    // }
    // handleTermChange(e){
    //     console.log(e);
    //     this.setState({searchTerm: e.target.value});
    // }

    // handleFilterChange(e){
    //     // alert(e.target.value);
    //     this.setState({currentFilter: e.target.value}, () => {
    //         console.log(this.state.currentFilter); //is asynch, so not putting it as callback made the previous state print 
    //     });
        
    // }

    render(){
        return(
            <div className="container sidebar">
                <Search />
                <RequestList />
            </div>
        );
    }

    // componentWillMount


}


// export default function Sidebar(){
    /*
    - call parent's handleFilter
    - call parent's handleSearch
    - handle changes to buttons == rerender and make all buttons inactive state except for one
    - handle 
    */
// }