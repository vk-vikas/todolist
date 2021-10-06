import React from 'react'
import './ListItem.css';

function ListItem(props) {
    return (
        <div className='item'>
            <p> {props.data.title}</p>
        </div>
    )
}

export default ListItem
