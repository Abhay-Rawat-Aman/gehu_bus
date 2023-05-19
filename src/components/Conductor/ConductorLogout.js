import React from 'react'
import { useHistory } from 'react-router-dom';

const ConductorLogout = () => {
    localStorage.clear();
    const history = useHistory();
    history.push('/');
  return (
    <div>
      
    </div>
  )
}

export default ConductorLogout
