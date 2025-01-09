import React, { Fragment } from "react";
//import Greet from "./props/Greet";
//import Welcome from "./props/Welcome";
//import Count from "./state/Count";
// import ParentComponent from "./methods-as-props/ParentComponent";
//import UserGreeting from "./conditional-rendering/UserGreeting";
//import ListData from "./list-rendering/ListData";
import HookList from "./hooks/listHooks";
//import Count from "./count/count";
//import SearchImage from "./search-image/SearchImage";
//import User from "./child-to-parent/User";
//import MultiPleInput from "./hooks/MultipleInputHooks"
//import PushArrayOnBtnClick from "./count/PushArrayOnBtnClick";
import Login from "./be-U/Login";
import LifecycleA from "./lifecycle-methods/LifecycleA";
// import ParentComponent from "./Pure-Component/ParentComponent";
import UserTable from "./user-table/user-table";
import ParentComponent from "./Pure-Component/parent-component-functional";
//import SocialLogin from "./social-login/GoogleLogin";
//import Facebook from "./social-login/FacebookLogin";
//import Menu from '../src/Menu/Menu';
//import Interview from "./clement-interview";
//import {Demo} from "./Demo/QueryBuilder";
//import Practice from '../src/Practice';
//import FilterableProductTable from './component/mock/FilterableProductTable';
//import Cookie from './cookie/Cookie';
import ReactCrudOperations from "./crud/index";


function App() {
  /*  const parentAlert = (d) => {

    alert(d.lastName)


  }  */

  const handleLogin = (val) => {
    let username = val.userName;
    let password = val.passWord;
    //console.log(val)

    if (username === "abc" && password === "abc") {
      alert("Login Successful");
    } else {
      alert(" Login Unsuccessful");
    }
  };

  return (
    <>
      {/*   <Welcome Tag = 'h1' Tag2 = 'h4' /> */}

      {/*   
    <Greet name ="Alweena" heroName = "Diana">
    </Greet>
    <Greet name ="Anusha"  heroName = "John">
    <button>Action</button>
    </Greet>
    <Welcome  name="from Welcome Component"/>
    <Welcome>
      <h4>Hi alweena</h4>
    </Welcome>
   */}

      {/*
      <Count />
        <ParentComponent/>
         <UserGreeting />
          
    */}

      {/*
       <div className="user-info">
          <SearchImage />
       </div> 
  */}

      {/*  <User handleClick = {parentAlert} name = "Anusha"/>  */}

      {/*  <ListData />  */}

      {/* <SocialLogin handleLogin = {handleLogin} /><br/>
  <Facebook />
 */}
      {/*  <HookList/> */}
      {/* <Login handleLogin={handleLogin} /> */}
      {/* <LifecycleA /> */}
      {/* <ParentComponent/> */}
      {/* <UserTable /> */}
      <ReactCrudOperations />
    </>
  );
}

export default App;
