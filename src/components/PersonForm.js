import React from 'react';

class PersonForm extends React.Component {
  createPerson(e) {
    e.preventDefault();

    const person = {
      name: this.name.value,
      facebook: this.facebook.value,
      twitter: this.twitter.value,
      github: this.github.value,
      linkedIn: this.linkedIn.value
    };

    this.props.addPerson(person);
    this.form.reset();
  }

  render() {
    return (
      <li>
        <p>Fill out your own information!</p>
        <form ref={input => this.form = input} onSubmit={this.createPerson.bind(this)}>
          <input ref={input => this.name = input} type="text" name="name" placeholder="Name"/>
          <input ref={input => this.facebook = input} type="text" name="facebook" placeholder="Facebook"/>
          <input ref={input => this.twitter = input} type="text" name="twitter" placeholder="Twitter"/>
          <input ref={input => this.github = input} type="text" name="github" placeholder="Github"/>
          <input ref={input => this.linkedIn = input} type="text" name="linkedIn" placeholder="Twitter"/>
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
