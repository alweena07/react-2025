import React, {Component,Fragment}  from 'react';
import ChildComponent from "./ChildComponent";


class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
  }

  greetParent = (childname) => {
    alert(`
         Hello ${this.state.parentName}
         I am ${childname}
    `);
  };

  render() {
    return (
      <Fragment>
        <ChildComponent  greetParent = {this.greetParent}/>
      </Fragment>
    );
  }
}

export default ParentComponent;