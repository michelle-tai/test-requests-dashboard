import React from 'react';

const requestItems = [1, 2, 55, 4, 23];

const RequestList = ({selectedRequestItem}) => {
    return (
        <div className="container list">
            {requestItems.map(requestItem => {
                return <a className="list-item" key={requestItem} onClick={selectedRequestItem}>{requestItem}</a>
            })}
            <div value="asdf" className="list-item">asdf</div>
            <div value="asdf" className="list-item">asdf</div>
            <div value="asdf" className="list-item">asdf</div>
        </div>

    ); 
}

export default RequestList;