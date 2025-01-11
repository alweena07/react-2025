import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComponent from "./PureComponent";

const obj = { name: "alweena" };

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alweena",
      obj: {
        name: "alweena",
        title: "software developer",
      },
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Alweena",
        obj: {
          name: "alweena",
          title: "software developer",
        },
      });
    }, 2000);
  }

  render() {
    console.log("Parent");
    return (
      <div>
        <h4>Parent Component</h4>
        <RegularComponent name={this.state.name} />
        <PureComponent
          name={this.state.obj}
          // name = {obj}
        />
      </div>
    );
  }
}

export default ParentComponent;
