import React,{useEffect, useState} from 'react';
import './App.css';
import { Button ,FormControl,Input,InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
//import firebase from './firebase';
import * as firebase from 'firebase';
//import FieldValue from './firebase';
//FieldValue = require('firebase-admin').firestore.FieldValue;



function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput]= useState('');
  //when we load the ,need to listen the data base
   useEffect(()=>{
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
    setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
  
    
  })
 }, [] );


  const addTodo=(event)=>{ 
    //adding to the list 


    event.preventDefault();//will stope the refreshing
   db.collection('todos').add({
     
      todo : input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })

 // setTodos([...todos,input]);
  setInput('');//clear the input field after submit.
  };



  //console.log(input);
  return (
    <div className="App">
      <form>
     {/* <input value={input} onChange={event=>setInput(event.target.value)}/>*/}
      <FormControl>
          <InputLabel>Write ToDo</InputLabel>
         <Input value={input} onChange={event=>setInput(event.target.value)} />
      </FormControl>
    {/*<button type='submit' onClick={addTodo}> todo</button>*/}
      <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={addTodo}>todo
  
</Button>
      </form>
      <ul>
        {todos.map(todo=>(
          <Todo todo={todo}/>
         // <li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}
 
export default App;
