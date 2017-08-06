import {h, Component} from 'preact'

import './header.scss'
import {Link} from 'react-router-dom'

export default class HeaderComponent extends Component<{}, any> {
    public render() {
        return <div className='app-header'>
            <div className="container">
                <div class="app-header-inner">
                    <h1>Alex Jones</h1>
                    <h3>Software Developer - Bristol</h3>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                </div>
            </div>
        </div>
    }
}