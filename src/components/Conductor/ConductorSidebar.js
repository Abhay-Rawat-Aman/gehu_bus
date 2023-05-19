import React from 'react'
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LogoutIcon from '@mui/icons-material/Logout';

const ConductorSidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top"><span className="logo">Conductor</span></div>
        <hr/>
        <div className="center">
            <ul>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>
                        Dashboard
                    </span>
                </li>
                
                <li>
                    <DirectionsBusIcon className="icon"/>
                    <span>
                    <Link to='/conductor/busdetails' style={{'textDecoration':'None'}}>Bus Details</Link>
                    </span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>
                        <Link to='/conductor/logout' style={{'textDecoration':'None'}}>Logout</Link>
                    </span>
                </li>
                
            </ul>
        </div>
        
    </div>
  )
}

export default ConductorSidebar
