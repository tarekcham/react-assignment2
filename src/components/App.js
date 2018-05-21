import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person";
import Validation from "./Validation";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Tahseen", age: 38 },
      { id: 3, name: "Mariam", age: 68 }
    ],
    toggleDiv: false,
    inputLength: "",
    inputValue: ""
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Tahseen", age: 38 },
        { name: "Mariam", age: 68 }
      ]
    });
  };

  toggleHandler = () => {
    this.setState({
      toggleDiv: !this.state.toggleDiv
    });
  };

  deleteHandler = key => {
    const persons = [...this.state.persons]; // const persons = this.state.persons.slice();
    console.log(persons);
    persons.splice(key, 1);
    console.log(persons);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //console.log(personIndex)
    const person = {
      // const person = Object.assign({}, this.state.persons[personIndex])
      ...this.state.persons[personIndex]
    };
    const persons = [...this.state.persons];
    //console.log(person)
    persons[personIndex] = person;
    person.name = event.target.value;
    this.setState({
      persons
    });
  };

  calcLength = event => {
    const inputLength = event.target.value.length;
    const inputValue = event.target.value;
    this.setState({
      inputLength,
      inputValue
    });
  };

  deleteCharHandler = key => {
    let charsArr = this.state.inputValue.split("");
     //console.log(charsArr);
     charsArr.splice(key, 1);
    // console.log(charsArr);
     charsArr= charsArr.join('')
    // console.log(charsArr)
     this.setState({ inputValue: charsArr });
  };

  render() {
    console.log(this.state.persons);
    const style = {
      backgroundColor: "grey",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      fontWeight: "bold"
    };

    let persons = null;

    if (this.state.toggleDiv) {
      persons = (
        <div>
          {this.state.persons.map((person, key) => (
            <Person
              key={person.id}
              click={() => this.deleteHandler(key)}
              name={person.name}
              age={person.age}
              changed={event => this.nameChangeHandler(event, person.id)}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
        <button style={style} onClick={this.toggleHandler}>
          show persons
        </button>
        {persons}
        <input
          style={{ display: "block", margin: "2rem auto", fontWeight: "bold" }}
          type="text"
          onChange={this.calcLength}
          
        />
        {this.state.inputLength}
        <Validation
          textLength={this.state.inputLength}
          inputValue={this.state.inputValue}
          deleteCharHandler={this.deleteCharHandler}
        />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Dose this work now?'))
  }
}

export default App;
