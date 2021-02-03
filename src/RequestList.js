import React from 'react';

const requestItems = [1, 2, 55, 4, 23];

export default class RequestList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedReqest: ""
        };
    }

    render(){
        return (
            <div className="container list">
                {requestItems.map(requestItem => {
                    return <div className="list-item" key={requestItem}>{requestItem}</div>
                })}
                <div className="list-item">asdf</div>
                <div className="list-item">asdf</div>
                <div className="list-item">asdf</div>
            </div>

        );
    }
}