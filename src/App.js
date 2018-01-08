import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  //As it is class we can define here properties
  //State is managed inside by component and is availble only in components that extend componend
  //state should be used with care and is hard to manage
  //state is reserved word
  //We can access by state property

  state = {
    persons: [
      { id:'1231',name: 'RajKumar', age: 23 },
      { id:'12',name: 'Saraogi', age: 21 },
       { id:'13',name: 'Manu', age: 25 }
    
    ],
    showPersons: false,
    other: "Other details"
  }

  //We use terminlogy handler to know that is called when an event occours
  //we have created function as property as we need to use this do relate to the class

  switchNameHandler = () => {
    //Here we will be edit the state
    //We should not mutuate state like this it gives warning 
    //this.state.persons[1].name="Saraogi";

    //We use setState Method in Components class
    //This will update the property without changing other properties

    this.setState({
      persons: [
        { id:'1231',name: 'RajKumar', age: 23 },
       { id:'12',name: 'Saraogi', age: 21 },
        { id:'13',name: 'Manu', age: 25 }
      ]
    });
  }

  //This is 2 way binding type example
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 23 },
        { name: 'Saraogi', age: 21 },
        { name: 'Manusasd', age: 25 }
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  //Delete the item in the list
  //It is always better to render state wthout mutatating the orignal one
  //Hence to do so we use spread operator to make a copy of the given json array or json object
  deletePersonHandler=(index)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id === index;
    })

    const Persons = [...this.state.persons];
    Persons.splice(personIndex,1);
    this.setState({
      persons:Persons
    })
  }

  render() {

    //Adding styles to button
    const style={
      backgroundColor:'green',
      font:'inherit',
      color:'white',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {

      //Setting of the background color proporty
      style.backgroundColor='red';  
      persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
              return <Person 
              click={()=>this.deletePersonHandler(index)}
              name={person.name} 
              key={person.id}/>
            })
          }
        </div>
      )


      //   <div>
      //   <Person name={this.state.persons[0].name} age="23" changed={this.changeNameHandler} />
      //   <Person name={this.state.persons[1].name} age="21" />
      //   <Person name={this.state.persons[2].name} age="24">Playing Football</Person>
      // </div>);
    }


    return (
      <div className="App">
        <h1> Hi I am React </h1>

        <button onClick={this.switchNameHandler}>Switch Name</button>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}

      </div>
    );
  }
}

export default App;
