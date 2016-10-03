import React from 'react';

import personData from '../devData';

import PersonList from './PersonList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      persons: personData
    }
  }

  addPerson(newPerson) {
    const persons = [...this.state.persons, newPerson];
    this.setState({persons});
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <PersonList
          persons={this.state.persons}
          addPerson={this.addPerson.bind(this)}/>
      </div>
    );
  }
}

export default App;
