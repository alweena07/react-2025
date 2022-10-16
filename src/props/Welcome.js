import React, { Component, Fragment } from "react";

class Welcome extends Component {


  render() {
    const {Tag, Tag2} = this.props;

    return (
     
      <Fragment>
        <p style={{margin:"80px 550px"}}>Welcome {this.props.name} </p>
        {this.props.children}
        <Tag>Alweena</Tag>
        <Tag2>Iqbal</Tag2>
      </Fragment>
    );
  }
}

export default Welcome;
