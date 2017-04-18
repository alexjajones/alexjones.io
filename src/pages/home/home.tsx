import {h, Component} from 'preact';
import './home.scss'

export interface HomeProps {
    title: string
}

export default class HomeComponent extends Component<HomeProps, any> {
    render () {
        return <div className='home'>
            <div className='hero'>
                <div className="container">
                    <div class="hero-inner">
                        <h1>Alex Jones</h1>
                        <h3>Software Developer - Bristol</h3>
                        <div>
                            <div className="icon github"></div>
                            <div className="icon twitter"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="selfie-container"></div>
        </div>
    }
}