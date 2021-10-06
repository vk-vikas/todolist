import React ,{useState} from 'react'
import './ListItem.css';

function ListItem(props) {

    const [del ,setDel] = useState(false);

    const onClickHandler = (event) => {
        console.log(event);
        setDel(true);
    }
    return (
        <div className='item'>
            <p className= {`${del? 'delete' : ''}`} onClick={onClickHandler}> {props.data.title}</p>
        </div>
    )
}

export default ListItem
