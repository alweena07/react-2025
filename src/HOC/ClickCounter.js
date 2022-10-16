import React, {Component} from 'react';
import withCounter from './WithCounter';

class ClickCounter extends Component {
    render(){
        const {counter, incrementCount} = this.props;

        return (
            <div>

                <button onClick = {incrementCount}> {this.props.name} Clicked {counter} times</button>

            </div>
            )
    }

}

export default withCounter(ClickCounter, 5) 




/*


   function sing(callback){

        if(callback){
            callback();
        }
       
        console.log("la la la");
       
    }

    
    sing(() => { console.log('dance dance')});
*/


/* 

  function multiplier(x){
      
        return y => y*x
    }

    const mul = multiplier(4);

    console.log(mul(2))





*/
