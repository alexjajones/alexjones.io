import {h, Component} from 'preact'
import ExperienceComponent from "pages/about/experience/experience";

export default class AboutComponent extends Component<{}, any> {
    render() {
        return <div className="about">
            <ExperienceComponent/>
        </div>
    }
}