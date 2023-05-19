import React from 'react'
import { useHistory } from 'react-router-dom';

const StudentLogout = () => {
  
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    //localStorage.removeItem('set_bus');
    localStorage.removeItem('bus_detials');
    localStorage.clear();
    const history = useHistory();
    history.push('../');
    return (
    <>
      
    </>
  )
}

export default StudentLogout
