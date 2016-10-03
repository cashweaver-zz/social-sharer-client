import React from 'react';

class PersonForm extends React.Component {
  createPerson(e) {
    e.preventDefault();

    const person = {
      name: this.name.value
    };

    this.props.addPerson(person);
    this.form.reset();
  }

  render() {
    return (
      <li>
        <p>Fill out your own information!</p>
        <form
          ref={input => this.form = input}
          onSubmit={this.createPerson.bind(this)}>
          <input
            ref={input => this.name = input}
            type="text"
            name="name" />
          <input type="submit"/>
        </form>
      </li>
    );
  }
}

PersonForm.propTypes = {
  addPerson: React.PropTypes.func.isRequired
}

export default PersonForm;
