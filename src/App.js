import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  //As it is class we can define here properties
  //State is managed inside by component and is availble only in components that extend componend
  //state should be used with care and is hard to manage
  //state is reserved word
  //We can access by state property

  state={
    persons:[
      {name:'Raj',age:23},
      {name:'Sharma',age:21},
      {name:'Manu',age:25}
    ],
    other:"Other details"
  }

  //We use terminlogy handler to know that is called when an event occours
  //we have created function as property as we need to use this do relate to the class
  
  switchNameHandler = ()=>{
    //Here we will be edit the state
    //We should not mutuate state like this it gives warning 
    //this.state.persons[1].name="Saraogi";
    
    //We use setState Method in Components class
    //This will update the property without changing other properties
    
    this.setState({
      persons:[
        {name:'RajKumar',age:23},
        {name:'Saraogi',age:21},
        {name:'Manu',age:25}
      ] 
    }) ;  
  }

  //This is 2 way binding type example
  changeNameHandler=(event)=>{
    this.setState({
      persons:[
        {name:event.target.value,age:23},
        {name:'Saraogi',age:21},
        {name:'Manu',age:25}
      ] 
    }) ;
  }

  render() {
    return (
      <div className="App">
        <h1> Hi I am React </h1>
       
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age="23" changed={this.changeNameHandler}  />
        <Person name={this.state.persons[1].name} age="21" />
        <Person name={this.state.persons[2].name} age="24">Playing Football</Person>
      </div>
    );
  }
}

export default App;
