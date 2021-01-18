import React from 'react';
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar,  IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
              <Avatar src ='https://www.flowerpicturegallery.com/d/781-1/purple+daisy+flower+images.jpg'/>
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton> 
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>                  
                </div>
            </div>
            <div className='sidebar__search'>

            </div>
        </div>
    )
}

export default Sidebar