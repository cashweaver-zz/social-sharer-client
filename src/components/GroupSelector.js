import React from 'react';

class GroupSelector extends React.Component {
  constructor() {
    super();

    this.goToGroup = this.goToGroup.bind(this);
  }

  goToGroup(e) {
    e.preventDefault();

    this.context.router.transitionTo(`group/${this.groupInput.value}`);
  }

  render() {
    return (
      <div>
        <h1>Select a Group</h1>
        <form onSubmit={this.goToGroup}>
          <input type="text" required placeholder="Group Name" ref={input => this.groupInput = input}/>
          <input type="submit" value="Go to group" />
        </form>
      </div>
    );
  }
};

GroupSelector.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default GroupSelector;
