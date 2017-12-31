//We will be using js function component
//A component is something that return jsx
//Components are awesome as we can put them in file whenever needed



import React from 'react';

//If we want some dynamix content in jsx we need to wrap in {}
//One argument is passed by defualt
//It contains all the arguments passed to it 

//There is special prop which get the value between the tages
//This is props.children which is reserved
const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
        //<p> I am a Person and I am {Math.floor(Math.random()*30)} years old</p>

    )
}

//Here default means the file importing this will get that inmported by default
export default person;