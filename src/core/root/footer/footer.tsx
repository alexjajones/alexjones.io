import {h, Component} from 'preact'
import './footer.scss'

export default class FooterComponent extends Component<{}, any> {
    render() {
        return <div className="footer">
            <p> Made with Preact ❤️ <br/> Alexjones.io - Source on Github</p>
        </div>
    }
}