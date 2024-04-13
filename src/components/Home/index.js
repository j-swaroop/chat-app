import TryTheseItem from "../TryTheseItem";
import Featured from "../Featured";
import Genre from "../Genre";
import TrySaying from "../TrySaying";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Component } from "react";
import SideBar from "../SideBar";
import './index.css'
import { Link } from "react-router-dom";

const tryTheseData = [
    {
        id: 1,
        imgUrl: 'https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0',
        title: 'Practice a new language',
        subTitle: 'with Hyperglot'
    },
    {
        id: 2,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1712733736/travel-g5834cbbb2_1280-sixteen_nine_m7dmxd.jpg',
        title: 'Practive interviewing',
        subTitle: 'with Interviewer'
    },
    {
        id: 3,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1709218247/3100a219fae47529e2d9b4beac8b9965_vxx4yw.jpg',
        title: 'Brainstrom ideas',
        subTitle: 'with Brainstrom'
    },
    {
        id: 4,
        imgUrl: 'https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&anim=0',
        title: 'Get book recommendations',
        subTitle: 'with Librarian Linda'
    },
    {
        id: 5,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1709045840/pexels-lisa-fotios-776538_eh1vh6.jpg',
        title: 'Plan a trip',
        subTitle: 'with Trip Planner'
    },
    {
        id: 6,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1707999161/1000_F_573857579_udFyWy4PUDdXIk8ctEkSxW2TycJq5G6R_ocqljl.jpg',
        title: 'Write a story',
        subTitle: 'with Creative Helper'
    },
    {
        id: 7,
        imgUrl: 'https://characterai.io/i/80/static/avatars/TextAdventure3.png?webp=true&anim=0',
        title: 'Play a game',
        subTitle: 'with Text Adventure Game'
    },
    {
        id: 8,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1707577083/girl_zkwnyv.webp',
        title: 'Help me make a decision',
        subTitle: 'with DecisionHelper'
    }
]

const featuredData = [
    {
        id: 1,
        imgUrl: 'https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0',
        title: 'Character Assitant',
        by: 'By @london',
        subTitle: 'Your Ai work/study buddy'
    },
    {
        id: 2,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1707577083/girl_zkwnyv.webp',
        title: 'Yea Miko',
        by: 'By @Zap',
        subTitle: 'From Zenshin Impact'
    },
    {
        id: 3,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1707999188/painting-mountain-lake-with-mountain-background_188544-9126_ras2yp.jpg',
        title: 'Konig',
        by: 'By @#23rrg',
        subTitle: 'A tall and anxious king names Konig'
    },
    {
        id: 4,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1709046459/Untitled_design_arawas.png',
        title: 'Iaskai narratoe',
        by: 'By @U-named',
        subTitle: 'You got reincarnated Into a fantasy world'
    },
    {
        id: 5,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1709209488/foggy-morning-in-a-meadow_qewwpz.jpg',
        title: 'HyperGlot',
        by: 'By @xpearhead',
        subTitle: `Willkommen, bienvenue,welcome-I'm HyperGlot....`
    },
    {
        id: 6,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1709218247/3100a219fae47529e2d9b4beac8b9965_vxx4yw.jpg',
        title: 'Zero Two',
        by: 'By @Xomu',
        subTitle: `I'm Zero Two from Darling in The Franx`
    },
    {
        id: 7,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1707999188/painting-mountain-lake-with-mountain-background_188544-9126_ras2yp.jpg',
        title: 'Koko',
        by: 'By @#koko',
        subTitle: 'A tall and anxious king names Konig'
    },
    {
        id: 8,
        imgUrl: 'https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0',
        title: 'Character Assitant',
        by: 'By @london',
        subTitle: 'Your Ai work/study buddy'
    },
]

const genre = [
    {
        id: 1,
        genreTitle: 'Helpers',
    },
    {
        id: 2,
        genreTitle: 'Anime Game Characters',
    },
    {
        id: 3,
        genreTitle: 'Games',
    },
    {
        id: 4,
        genreTitle: 'Anime',
    },
    {
        id: 5,
        genreTitle: 'Game Characters',
    },
    {
        id: 6,
        genreTitle: 'Comedy',
    },
    {
        id: 7,
        genreTitle: 'Vtuber',
    },
    {
        id: 8,
        genreTitle: 'Books',
    },
    {
        id: 9,
        genreTitle: 'Image Generating',
    },
    {
        id: 10,
        genreTitle: 'Dicussions',
    },
    {
        id: 11,
        genreTitle: 'Langauge Learning',
    },
    {
        id: 12,
        genreTitle: 'History',
    },
    {
        id: 13,
        genreTitle: 'Religion',
    },
    {
        id: 14,
        genreTitle: 'Animals',
    },
    {
        id: 15,
        genreTitle: 'Politics',
    }
]

class Home extends Component{
    state = {
        showSidebar: true
    }

    onShowSidebar = () => {
        this.setState(prevState => ({showSidebar: !prevState.showSidebar}))
    }

    render(){
        const {showSidebar} = this.state

        const homeContainerClass = showSidebar ? 'home-container-add-margin': ''
        return(
            <>
                {showSidebar && <SideBar showSidebar={showSidebar} onEnableSidebar={this.onShowSidebar} />}
                <div className={`home-container ${homeContainerClass}`}>
                    <div className="home-responsive">
                        <div className="home-title-container">
                            <div className="home-icon-text-container">
                                {!showSidebar && <button className="sidebar-open-icon" onClick={this.onShowSidebar}> 
                                    <BsLayoutTextSidebarReverse className="sidebar-icon"/> </button> }
                                <div className="home-text-container"> 
                                    <p className="welcome-text"> Welcome Back,</p>
                                    <div className="profile-cont">
                                        <div className="initial-container">
                                            s
                                        </div>
                                        <p className="name-text"> Swaroop</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="input-container">
                                <CiSearch/>
                                <input type="search" className="input" placeholder="Search for Characters"/>
                            </div>
                        </div>

                        <div className="home-data-container">
                            <p className="try-these"> Try these</p>
                            <ul className="unoordered-list">
                                {tryTheseData.map(eachItem => <TryTheseItem key={eachItem.id} data={eachItem}/>)}
                            </ul>

                            <p className="try-these"> Featured</p>
                            <ul className="unoordered-list">
                                {featuredData.map(eachItem => <Featured key={eachItem.id} data={eachItem}/>)}
                            </ul>

                            <ul className="unoordered-list">
                                {genre.map(eachItem => <Genre key={eachItem.id} data={eachItem} />)}
                            </ul>

                            <TrySaying />

                            <div className="create-character-container">
                                <img src='https://character.ai/_next/image?url=%2Fhomeassets%2Fzeus.webp&w=128&q=25' 
                                    alt='create character' className="create-chracter-img"/>
                                <p className="create-character-text"> Create A Character</p>
                                <p className="create-character-description"> Not vibing with any characters? Create one of your own! 
                                    Customize things like their voice, conversation starts, their tone, and more!
                                </p>
                                <Link to='/characternew'>
                                    <button className="create-btn"> Create a Character</button>
                                </Link>
                            </div>

                            <div className="footer">
                                <p className="footer-item"> About</p>
                                <p className="footer-item"> Careers</p>
                                <p className="footer-item"> Blog</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



export default Home