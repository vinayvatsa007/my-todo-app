import React from 'react';
import ListItem from './ListItem/ListItem';

const ToDoList =({toDoList, isChecked, deleteTask})=>{
    console.log('todolist - ',toDoList);
    return (
            <ul>
                {
                    toDoList.map(objItem => {
                        return (<ListItem key={objItem.id}
                                          id={objItem.id}
                                          description={objItem.description}
                                          isChecked={isChecked}
                                          deleteTask={deleteTask}
                        />);
                        }
                    )
                }
            </ul>
    );
}
export default ToDoList;