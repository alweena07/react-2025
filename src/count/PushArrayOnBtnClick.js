import React, { Component } from 'react'

 class PushArrayOnBtnClick extends Component {
     constructor(props) {
         super(props);
     
         this.state = {
             players:[],
             count:0
              
         }
     }

     
     addNewItem = () => {
        let { players, count } = this.state;
        players.push(count+1);
        this.setState({players: players});
        this.setState({count:count+1}, () => {console.log('Callback value:'+this.state.count)})
        console.log(this.state.count)
     
      };
     
    render() {
     
       
       
        return (
            <div>

        <button onClick={this.addNewItem}> Add Item </button>
        <ul>
          {this.state.players.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          })}
        </ul>
                    
            </div>
        )
    }
}

export default PushArrayOnBtnClick;
