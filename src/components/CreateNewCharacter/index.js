import { v4 } from 'uuid';

import { Component } from "react";
import SideBar from "../SideBar";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";

import './index.css'

class CreateNewCharacter extends Component{
    state = {
        showSidebar: true,
        username: '',
        userTagline: '',
        userDescription: '',
        userGreeting: '',
        newProfile: []
    }

    onShowSidebar = () => {
        this.setState(prevState => ({showSidebar: !prevState.showSidebar}))
    }

    onSubmitForm = event => {
        event.preventDefault()

        const {username, userTagline, userDescription, userGreeting} = this.state

        if (username !== '' && userTagline !== '' && userDescription !== '' && userGreeting !== ''){
            const newObj = {
                id :v4(),
                username: username,
                userTagline: userTagline,
                userDescription: userDescription,
                userGreeting: userGreeting
            }

            this.setState(prevState => ({newProfile: [...prevState.newProfile, newObj]}))
            
        }
    }

    onChangeUserName = event => {
        this.setState({username: event.target.value})
    }

    onChangeDescription = event => {
        this.setState({userDescription: event.target.value})
    }

    onChangeTagline = event => {
        this.setState({userTagline: event.target.value})
    }

    onChangeGreeting = event => {
        this.setState({userGreeting: event.target.value})
    }

    render(){
        const {showSidebar, username, userDescription, userGreeting, userTagline, newProfile} = this.state

        const createContainerClass = showSidebar ? 'create-container-add-margin': ''
        return(
            <>
                {showSidebar && <SideBar showSidebar={showSidebar} onEnableSidebar={this.onShowSidebar} 
                    onAddNewProfile={newProfile}/>}
                <div className={`create-profile-container ${createContainerClass}`}>
                    <div className="create-profile-responsive">
                        {!showSidebar && <button className="sidebar-open-icon" onClick={this.onShowSidebar}> 
                            <BsLayoutTextSidebarReverse className="sidebar-icon"/> </button> }
                        
                        <form onSubmit={this.onSubmitForm} className="form-container">
                            <div className="input-text-container">
                                <label htmlFor="name"> Character name</label>
                                <input id='name' type='text' className="input-container-create" 
                                    placeholder="e.g Albert Einstein" onChange={this.onChangeUserName}/>
                                <p className="character-count"> {username.length}/20</p>
                            </div>

                            <div className="input-text-container">
                                <label htmlFor="tagline" className="dotted"> Tagline</label>
                                <input id='tagline' type='text' className="input-container-create" 
                                    placeholder="Add a short tagline for your character" onChange={this.onChangeTagline}/>
                                <p className="character-count"> {userTagline.length}/50</p>
                            </div>

                            <div className="input-text-container">
                                <label htmlFor="description"> Description</label>
                                <input id='description' type='text' className="input-container-create"
                                     placeholder="How would your character describe them" onChange={this.onChangeDescription}/>
                                <p className="character-count"> {userDescription.length}/500</p>
                            </div>

                            <div className="input-text-container">
                                <label htmlFor="greeting"> Greeting</label>
                                <input id='greeting' type='text' className="input-container-create"
                                     placeholder="e.g Hello i am Albert. Ask me anything" onChange={this.onChangeGreeting}/>
                                <p className="character-count"> {userGreeting.length}/2000</p>
                            </div>

                            <button className='create-btn'> Create Character</button>
                        </form>
                        
                    </div>
                </div>
            </>
        )
    }
}


export default CreateNewCharacter