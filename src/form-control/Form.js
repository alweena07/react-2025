import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
        userName:'',
        topic:'react',
        comment:'',

    };
    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput = event =>{
      this.setState({userName:event.target.value});
  }

  handleTopicChange = event => {
      this.setState({topic:event.target.value})
  }


  handleCommentChange = evt => {
    this.setState({comment:evt.target.value})
  }

  handleSubmit = (e) => {
      alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`);
      e.preventDefault();
  }


  render() {
      const {userName,topic} = this.state;
   
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>Username</label>&ensp;
          <input type="text" value = {userName}
          onChange={this.handleFormInput}
          >
          </input>
        </div><br/>
        <div>
            <label>Comment</label>&ensp;
             <input type = 'text' value = {this.state.comment} onChange = {this.handleCommentChange} ></input><br/><br/>
             <label>Topic</label>&ensp;
            <select value = {topic} onChange = {this.handleTopicChange}>
                <option value = "react">React</option>
                <option value = "angular">Angular</option>
                <option value = "vue">Vue</option>
            </select>
        </div><br/><br/>
        <button type = "submit">Submit</button>
      </form>
    );
  }
}

export default Form;
