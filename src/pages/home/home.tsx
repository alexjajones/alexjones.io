import {h, Component} from 'preact';
import Hero from "./hero/hero";
import Experience from "./experience/experience";

import './home.scss'

export default class HomeComponent extends Component<{}, any> {
    render() {
        return <div className='home'>
            <Hero/>
            <div className="content">
                <div className="experience-container">
                    <Experience/>
                </div>
                <div className="activity-container">
                    <h2>Upcoming Talks</h2>
                    <p>Sept 26th 2017 - Javascript 101 Workshop</p>
                    <h2>Blog posts</h2>
                </div>
            </div>
            <div className="footer">
                <p> Made with Preact ❤️ <br/> Alexjones.io - Source on Github</p>
            </div>
        </div>
    }
}