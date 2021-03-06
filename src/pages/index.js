import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery';

// commenting out until I can fix full gallery view
// import FullGallery from '../components/FullGallery';

import thumbintellisoundai from '../assets/images/screenshots/intellisoundai.png'
import thumbmadewithspark from '../assets/images/screenshots/madewithspark.png'
import thumbrainierwatch from '../assets/images/screenshots/rainierwatch.png'
import thumbtrendingwordsofreddit from '../assets/images/screenshots/trendingwordsofreddit.png'
import thumbghostown from '../assets/images/screenshots/ghostown.png'
import thumbcornbeansbetas from '../assets/images/screenshots/cornbeansbetas.png'
import thumbstop32 from '../assets/images/screenshots/stop32.png'
import thumbseattleadventureclub from '../assets/images/screenshots/seattleadventureclub.png'
import thumbultimatejobsearchkanban from '../assets/images/screenshots/ultimatejobsearchkanban.png'
import thumbmovingfowardleadership from '../assets/images/screenshots/movingfowardleadership.png'
import thumbposyrae from '../assets/images/screenshots/posyrae.png'
import thumbstarwarssearch from '../assets/images/screenshots/starwarssearch.png'
import thumbtheappex from '../assets/images/screenshots/theappex.png'
import thumbseattlebybike from '../assets/images/screenshots/seattlebybike.png'


import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import fidelity from '../assets/images/fidelity.png'
import davidlindahlphoto from '../assets/images/davidlindahlphoto.png'
import capitalone from '../assets/images/capitalone.png'
import blackberrycentral from '../assets/images/blackberrycentral.png'
import sharebuilder from '../assets/images/sharebuilder.gif'

import avatar from '../assets/images/mountain-avatar.png'
import favicon from '../assets/images/mountain-avatar.png'
import shareImage from '../assets/images/geometric-gradients-background.png'


const FULL_GALLERY = [
    { 
        id: '1', 
        src: full01, 
        url: `https://theappex.com/`,
        thumbnail: thumbtheappex, 
        caption: 'The Appex', 
        freelanceTopProject: false,
        technicalTopProject: true,
        description: 'Co-founded, designed the branding & logo and led front-end development for this startup that recommends the best Android Apps.'
    },
    { 
        id: '1', 
        src: full01, 
        url: `https://star-wars-search.netlify.com/ `,
        thumbnail: thumbstarwarssearch, 
        caption: 'Star Wars Character Search', 
        freelanceTopProject: false,
        technicalTopProject: true,
        description: 'A search website built using jQuery, JavaScript, Express, Vanilla CSS and Star Wars API (SWAPI) endpoint.'
    },
    { 
        id: '1', 
        src: full01, 
        url: `http://www.intellisoundai.com/`,
        thumbnail: thumbintellisoundai, 
        caption: 'intelliSoundAI', 
        freelanceTopProject: false,
        technicalTopProject: true,
        description: 'Designed the UI and spearheaded front-end development for this machine learning project where a user can choose a wave file and train a neural network.'
    },
    { 
        id: '2', 
        src: full02, 
        url: `https://madewithspark.com/`,
        thumbnail: thumbmadewithspark, 
        caption: 'Made With Spark', 
        freelanceTopProject: false,
        technicalTopProject: true,
        description: 'A revenue generating collection of projects made with Laravel Spark built using the carrd platform.'
    },
    { 
        id: '3', 
        src: full03, 
        url: `https://rainierwatch.com/`,
        thumbnail: thumbrainierwatch, 
        caption: 'Rainier Watch', 
        freelanceTopProject: false,
        technicalTopProject: false,
        description: 'Founded and have grown an online community of thousands whose mission is to inform the PNW when The Mountain (Mount Rainier) is out.'
    },
    { 
        id: '4', 
        src: full04, 
        url: `https://trendingwordsofreddit.herokuapp.com/`,
        thumbnail: thumbtrendingwordsofreddit, 
        caption: 'Trending Words of Reddit', 
        freelanceTopProject: false,
        technicalTopProject: true,
        description: 'An online tool myself and 3 other developers made that renders the top posts in real time from a top 25 Subreddit of choice and then builds a wordcloud based on the titles of the subreddit posts.'
    },
    { 
        id: '5', 
        src: full05, 
        url: `http://ghostowngame.com/`,
        thumbnail: thumbghostown, 
        caption: 'Ghostown', 
        freelanceTopProject: false,
        technicalTopProject: true,
        description: 'Developed a text-based choose your own adventure game with 2 other developers built from scratch using vanilla Javascript, HTML and CSS in less than a week.'
    },
    { 
        id: '6', 
        src: full05, 
        url: `https://cornbeansbetas.com/`,
        thumbnail: thumbcornbeansbetas, 
        caption: 'Corn, Beans, & Betas', 
        freelanceTopProject: false,
        technicalTopProject: false,
        description: `A blog built on WordPress hosting informative posts about Iowa's economics, Iowa's economic forecasts based on data and other random musings.`
    },
    { 
        id: '7', 
        src: full06, 
        url: `http://stop32.org/`,
        thumbnail: thumbstop32, 
        caption: 'Stop32 Photography Club', 
        freelanceTopProject: false,
        technicalTopProject: false,
        description: 'The future digital home of a photography club I cofounded in 2009 and plan on reviving someday.'
    },
    { 
        id: '8', 
        src: full06, 
        url: `http://seattleadventureclub.org/`,
        thumbnail: thumbseattleadventureclub, 
        caption: 'Seattle Adventure Club', 
        freelanceTopProject: false,
        technicalTopProject: false,
        description: `Seattle's premier adventure club, also awaiting a full-scale launch.`
    },
    { 
        id: '9', 
        src: full06, 
        url: `https://ultimatejobsearchkanban.carrd.co/`,
        thumbnail: thumbultimatejobsearchkanban, 
        caption: 'The Ultimate Job Search Kanban', 
        freelanceTopProject: false,
        technicalTopProject: false,

        description: `A trello template I made for organizing a job search after hours of research.`
    },
    { 
        id: '10', 
        src: full06, 
        url: `https://seattlebybike.com/`,
        thumbnail: thumbseattlebybike, 
        caption: 'Seattle By Bike', 
        freelanceTopProject: true,
        technicalTopProject: false,
        description: `Designed then developed a static website using GatsbyJS and TailwindCSS for a local bike tour company.`
    },
    { 
        id: '10', 
        src: full06, 
        url: `https://movingforwardleadership.com/`,
        thumbnail: thumbmovingfowardleadership, 
        caption: 'Moving Forward Leadership', 
        freelanceTopProject: true,
        technicalTopProject: false,
        description: `Designed and developed the front-end of this custom WordPress theme for this client who runs a leadership podcast.`
    },
    { 
        id: '12', 
        src: full06, 
        url: `https://posyrae.com/`,
        thumbnail: thumbposyrae, 
        caption: 'Posy Rae', 
        freelanceTopProject: true,
        technicalTopProject: false,
        description: `Consulted on new website design and implemented via Squarespace for this paper florist client.`
    },
]

// const TOP_SIX = FULL_GALLERY.filter(obj => obj.topSix );
// const NOT_TOP_SIX = FULL_GALLERY.filter(obj => !obj.topSix );

let freelanceTopProject = true;
let technicalTopProject = true;

let displayFreelanceProjects = () => {
    if(freelanceTopProject)
        return freelanceTopProject = false;
    else
        return freelanceTopProject = true;
}

let displayTechnicalTopProject = () => {
    if(technicalTopProject)
        return technicalTopProject = false;
    else
        return technicalTopProject = true;
}

const FreelanceProjects = FULL_GALLERY.filter(obj => freelanceTopProject ? obj.freelanceTopProject : true );

const TechnicalProjects = FULL_GALLERY.filter(obj => technicalTopProject ? obj.technicalTopProject : true );


// let DisplayAllProjects = () => {
//     return(
//         <Gallery images={NOT_TOP_SIX} />
//     )
// }

class HomeIndex extends React.Component {
        render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        // let displayFullGallery = (FULL_GALLERY) => {
        //     if (!FULL_GALLERY) return;

        //     const gallery = FULL_GALLERY.map((obj, i) => {
        //         return (
        //             <article className="6u 12u$(xsmall) work-item" key={i}>
        //                 <a
        //                     className="image fit thumb"
        //                     href={obj.url}
        //                     target= "_blank"
        //                 >
        //                     <img src={obj.thumbnail} />
        //                 </a>

        //                 <h3><a href={obj.url} target="_blank">{obj.caption}</a></h3>
        //                 <p>{obj.description}</p>
        //             </article>
        //         );
        //     });

        //     return (
        //         <div className="row">
        //             {gallery}
        //         </div>
        //     );
        // }

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />

                    {/* General tags */}
                    <meta name="description" content={siteDescription} />
                    <meta name="image" content={shareImage} />
                    <link rel="shortcut icon" href={favicon} />

                    {/* Schema.org tags */}
                    

                    {/* OpenGraph tags */}
                    <meta property="og:title" content={siteTitle} />
                    <meta property="og:description" content={siteDescription} />
                    <meta property="og:image" content={shareImage} />

                    {/* Twitter Card tags */}
                    <meta name="twitter:title" content={siteTitle} />
                    <meta name="twitter:description" content={siteDescription} />
                    <meta name="twitter:image" content={shareImage} />
                    
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Greetings! My name is David.</h2>
                        </header>
                        <h3>I am a UI Developer, currently at <a href="http://indigoslate.com" target="_blank">Indigo Slate</a>.</h3>
                        <p>I love building stuff online. Like (nearly) all millennial developers I started off my dev career many, many moons ago playing with Legos. Since then I've been hooked on building things from start to finish. This innate curiosity and love for technology led me to world of development. I especially love crafting intuitive digital solutions for compelling brands and creating beautiful user experiences that surprise and delight end users.</p>
                        <h3>And a Digital Maker.</h3>
                        <p>And I don't just love coding, I also love building bootstrapped projects and making indie products that help humanity. </p>
                        <p>I founded <a href="https://rainierwatch.com" target="_blank">Rainier Watch</a>, <a href="http://seattleadventureclub.org" target="_blank">Seattle Adventure Club</a>, cofounded <a href="https://stop32.org" target="_blank">STOP32 Photography Club</a>, <a href="https://www.blackberrycentral.com" target="_blank">BlackBerryCentral</a> and am a current member of <a href="https://endpointmedia.co/" target="_blank">Endpoint Media</a>. I've made things like <a href="https://madewithspark.com/" target="_blank">Made With Spark</a>, <a href="https://ultimatejobsearchkanban.carrd.co/" target="_blank">The Ultimate Job Search Kanban Template</a>, <a href="https://fontsin.carrd.co/" target="_blank">Fonts In Carrd</a> and the <a href="https://lfcnews.netlify.com/" target="_blank">Liverpool FC News Telegram Channel</a>.</p>
                        <h3>Lastly, a passionate student of Design & UX.</h3>
                        <p>I love learning constantly about design and the UX world with a possible goal of becoming a UX designer after building a strong foundation in front-end development. Check out my recent <a href="http://design.davidalindahl.com" target="_blank">mini design case study.</a></p>
                        <ul className="actions">
                            <li><a href="https://austriker27.github.io/resume/" className="button">My Resume</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Projects - Freelance </h2>
                            <Gallery images={FreelanceProjects} />
                        <h2>Projects - Technical </h2>
                            <Gallery images={TechnicalProjects} />
                        <ul className="actions">
                            <li><a href="https://github.com/austriker27" target="_blank" className="button">My Github</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Prior Experiences</h2>
                        <p>My prior experiences as an Anti-Money Laundering Investigator, student of Economics and freelance Photographer have equipped me with a refined problem solving ability, data driven mindset, and eye for visual aesthetics. </p>
                        <ul className="priorExpRows">
                            <li className="row">
                                <img className="image thumb" src={davidlindahlphoto} alt="" />
                                <span>
                                    <h4> <a href="https://www.davidlindahlphoto.com/" target="_blank"> David Lindahl Photography </a> </h4>
                                </span> 
                                    <p> 8+ years of Freelance Photography</p>
                                
                            </li>

                            <li className="row">
                                <img className="image thumb" src={capitalone} alt="" />
                                <h4> <a href="https://capitalone.com" target="_blank"> Capital One </a> </h4>
                                <p> ~2 years of Anti-Money Laundering Investigator</p>
                            </li>

                            <li className="row">
                                <img className="image thumb" src={sharebuilder} alt="" />
                                <h4> <a href="https://en.wikipedia.org/wiki/Sharebuilder" target="_blank"> ShareBuilder </a> </h4>
                                <p> 3+ years of Operations Analysis at a FinTech Startup</p>
                            </li>                      

                            <li className="row">
                                <img className="image thumb" src={blackberrycentral} alt="" />
                                <h4> <a href="https://blackberrycentral.com" target="_blank"> BlackBerryCentral </a> </h4>
                                <p> 2+ years of Content Creation at a Tech Media Startup </p>
                            </li>

                            <li className="row">
                                <img className="image thumb" src={fidelity} alt="" />
                                <h4> <a href="https://fidelity.com" target="_blank"> Fidelity Investments </a> </h4>
                                <p> ~1 year of International Trading Experience </p>
                            </li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>I'm always looking for new and exciting opportunities especially if it involves startups, compelling brands and missions to serve humans. Come say hi on <a href="https://twitter.com/austriker27" target="_blank">Twitter</a>. </p>
                        <div className="row">
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`