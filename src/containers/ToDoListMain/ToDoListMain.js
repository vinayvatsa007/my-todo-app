import React, {Component} from 'react';
import ToDoList from '../../components/ToDoList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class ToDoListMain extends Component {

    state = {
        arrToDoList:[
            {id:"t1", description:"task1", isChecked:false},
            {id:"t2", description:"task2", isChecked:false}
        ],
        taskCount:0
    }


    render(){
        const addTaskHandler = (taskDescription)=> {

            let currentToDoList = [...this.state.arrToDoList]
            console.log('current list array = ',currentToDoList);
            let newTaskObj = {id: taskDescription, description: taskDescription, isChecked: false}
            console.log('newtask - ',newTaskObj);
            // currentToDoList.push(newTaskObj);
            currentToDoList = [...currentToDoList,newTaskObj]
            console.log('current list array = ',currentToDoList);
             //this.setState( {arrToDoList:currentToDoList});
            this.setState( (state, props) => ({ arrToDoList:currentToDoList}));


        }
        const deleteTask = (id) =>{
            console.log('delete button got hit');
        }
    return(
      <div>
          <Header />
          <input type="text"  onKeyUp={(e)=>{
              if(e.keyCode ===13){
                  addTaskHandler(e.target.value);
              }
          }} /> <button id="btnAdd"> Add item</button>
          <ToDoList
              toDoList = {this.state.arrToDoList}
              isChecked={false}
              deleteTask ={deleteTask}
          />
          <Footer/>
      </div>
    );
    };
}
export default ToDoListMain;
