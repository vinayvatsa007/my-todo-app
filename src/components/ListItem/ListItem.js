import React from 'react';

const ListItem = ({id, description, isChecked, deleteTask})=>{
    return(
            <li id={id}>
            <input type="checkbox"  />
            <span> {description} </span>
            <button onClick={deleteTask}>x</button>
        </li>
    );
}
export default ListItem;