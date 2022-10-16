import React from 'react';
import PersonList from './PersonList';


function ListData(){
    
    const persons = [
        {
            id:1,
            name:"Alweena",
            skill:"React"
        },
        {
            id:2,
            name:"Diana",
            skill:"Angular"
        },
        {
            id:3,
            name:"Bailey",
            skill:"Vue"
        },
        {
            id:4,
            name:"Heyoon",
            skill:"Dance"
        },
    ]

    const PersonListData = persons.map(person => <PersonList key = {person.id} person = {person} />);

    return <div>{PersonListData}</div>  
}


export default ListData;






/*

import React from 'react';
import PersonList from './PersonList';


function ListData(){

    const otherWay = { marginTop: '50px' , color: 'green' }
    const persons = [
        {
            id:1,
            name:"Alweena",
            skill:"React"
        },
        {
            id:2,
            name:"Diana",
            skill:"Angular"
        },
        {
            id:3,
            name:"Bailey",
            skill:"Vue"
        },
        {
            id:4,
            name:"Heyoon",
            skill:"Dance"
        },
    ]


    return (
        
        <div>
        <PersonList styles = {otherWay} / >
          
            
        </div>
       )
}


export default ListData;


*/



