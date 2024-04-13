import {withRouter, Link} from 'react-router-dom'

import { BsLayoutTextSidebar } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import {Component} from 'react'
import './index.css'

class SideBar extends Component{
    
    onShowSideBar = () => {
        const {showSidebar, onEnableSidebar} = this.props
        onEnableSidebar(!showSidebar)
    }


    render(){
        const {onAddNewProfile} = this.props
       
        const addProfile = onAddNewProfile !== undefined ? onAddNewProfile: 0
        return(
          
            <div className='sidebar-container'>
                <div className='sidebar-responsive'>
                    <div className="title-icon-container">
                        <Link to='/' className='link-item'>
                            <h1 className='main-heading'> character.ai</h1>
                        </Link>
                        <button className="sidebar-icon" onClick={this.onShowSideBar}> <BsLayoutTextSidebar className="sidebar-icon"/> </button> 
                    </div>
                    <Link to='/characternew' className='link-item'>
                        <div className="create-icons-container">
                            <FaPlus />
                            <button className='create-icons'> Create </button>
                        </div>
                    </Link>
                    <Link to='/' className='link-item'>
                        <div className="discover-container">
                            <FaDiamond/>
                            <p className="discover-text"> Discover</p>
                        </div>
                    </Link>
                    <div className="chats-container">
                        <p className="chats-text"> Chats</p>
                        <p className="today"> Today</p>
                        <ul className='unordered-list'>
                        {addProfile.length >= 1 &&
                            (onAddNewProfile.map(item => 
                                <Link to={`/character-ai-chat/${item.id}`} className='link-item' key={item.id} data={item}>
                                    <li className='profile-item' key={item.id} data={item}> 
                                        <div className='profile-intial'> @ </div>
                                        <p className='profile-name'> {item.username}</p>
                                    </li>
                                </Link>
                            ))
                        }
                        </ul>
                    </div>
            
                    <div className="sidebar-footer">
                        <div className="try-ai">
                            Try c.ai
                        </div>
                        <div className="sidebar-profile">
                            <div className="side-bar-profile-icon">S</div>
                            <p className="sidebar-profile-name"> Swaroop</p>
                        </div>
                    </div>
                </div>
            </div>
       
        )
    }
}


export default withRouter(SideBar)