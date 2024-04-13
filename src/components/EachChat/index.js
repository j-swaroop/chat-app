import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import {v4} from 'uuid'
import { Component } from 'react'
import SideBar from '../SideBar'
import './index.css'

class EachChat extends Component{
    state = {
        showSidebar: true,
        chatInput: '',
        chatList: []
    }

    onShowSidebar = () => {
        this.setState(prevState => ({showSidebar: !prevState.showSidebar}))
    }

    onChatInput = event => {
        this.setState({chatInput: event.target.value})
    }

    onClickChat = () => {
        const {chatInput} = this.state
        if (chatInput !== ''){

            let newObj = {
                id: v4(),
                text: chatInput
            }

            this.setState(prevState => ({chatList: [...prevState.chatList, newObj]}))
        }
    }

    render(){
        const {showSidebar, chatList} = this.state
       
        const eachContainerClass = showSidebar ? 'create-container-add-margin': ''
        return(
            <>
                {showSidebar && <SideBar showSidebar={showSidebar} onEnableSidebar={this.onShowSidebar} 
                    />}
                <div className={`each-chat-container ${eachContainerClass}`}>
                    <div className="each-chat-responsive">
                        {!showSidebar && <button className="sidebar-open-icon" onClick={this.onShowSidebar}> 
                            <BsLayoutTextSidebarReverse className="sidebar-icon"/> </button> }
                        
                        <div className="chat-container">
                            <ul className="chat-list">
                            
                                {chatList.length > 0 && 
                                    chatList.map(item => <li className="chat-item" key={item.id}> {item.text} </li>)
                                }
                            </ul>
                            <div className="chat-input-container">
                                <input type='text' placeholder="Message" className="chat-input" onChange={this.onChatInput}/>
                                <button className='chat-btn' onClick={this.onClickChat}> Send</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default EachChat