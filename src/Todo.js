import {  List, ListItem ,ListItemText} from '@material-ui/core';
import React  from 'react';
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



function Todo(props) {
   
    
    return (
        
        
        <List className="todo-list">
            <ListItem>
              
                <ListItemText primary={props.todo.todo} secondary={props.todo.timestamp} />
            </ListItem>
                {/*delete element*/ }
            <DeleteForeverIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>delete me</DeleteForeverIcon>
           
        </List>
       
            // <li>{props.text}</li>
        
    )
}
 
export default Todo
