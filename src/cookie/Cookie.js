import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import Cookies from 'universal-cookie';


const Cookie = () => {
    const [userData, setUserData] = useState({email:'', password:''});
  
    const handleUserData = (e) => {
        setUserData({...userData,
            [e.target.name]:e.target.value
            })
    }

     const handleCookie = () => {
      const cookies = new Cookies();
      let d = new Date();
      let minutes = 1;
      d.setTime(d.getTime() + (minutes*60*1000));
      cookies.set('username',userData.email , { path: '/', expires: d});
    
    }

    useEffect(() => {
      const cookies = new Cookies();
      const name = cookies.get('username')
      console.log(name);
      if(!name){
        alert('Session Expired')
      }
    }, [])

  return (
    <div>
        <input type = "email" name='email' value={userData.email} onChange = {handleUserData} /><hr/>
        <input type = "password" name='password' value={userData.password}  onChange = {handleUserData} /><hr/>
        <Button color = 'primary' onClick={handleCookie}>Set Cookie</Button>
    </div>
  )
}

export  default Cookie;
