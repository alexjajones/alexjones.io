import {h, Component} from 'preact';
import './hero.scss'

export default class HeroComponent extends Component<{}, any> {
    render() {
        return <div className='hero'>
            <div className="container">
                <div class="hero-inner">
                    <h1>Alex Jones</h1>
                    <h3>Software Developer - Bristol</h3>
                </div>
            </div>
            <div className="selfie-container"/>
        </div>
    }
}