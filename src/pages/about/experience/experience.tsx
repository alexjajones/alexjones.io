import {h, Component} from "preact";
import Badge, {BadgeProps} from "components/badge/badge"
import {TopPocket, Toumetis, ToumetisLead, University} from "./skills";

export default class ExperienceComponent extends Component<{}, any> {
    render() {
        return <div className="experience">
            <h1>About Me</h1>
            <h2>Lead Frontend/Backend Developer at Toumetis (2016 - present)</h2>
            <div className="skill-set">
                <div className="badges">
                    {this.prepSkills(ToumetisLead)}
                </div>
            </div>
            <h3>Cascadence - Real time industrial analytics platform</h3>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <h2>Developer at Toumetis (2014 - 2016)</h2>
            <div className="skill-set">
                <div className="badges">
                    {this.prepSkills(Toumetis)}
                </div>
            </div>
            <h3>Cascadence - Real time industrial analytics platform</h3>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <h3>Cascadence - Real time industrial analytics platform</h3>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <h2>Developer at Top Pocket Apps (2012 - 2014)</h2>
            <div className="skill-set">
                <div className="badges">
                    {this.prepSkills(TopPocket)}
                </div>
            </div>
            <h3>Cascadence - Real time industrial analytics platform</h3>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <h2>University of Bath Bachelor's degree in Computing 1st (2011 - 2014)</h2>
            <div className="skill-set">
                <div className="badges">
                    {this.prepSkills(University)}
                </div>
            </div>
            <h3>Cascadence - Real time industrial analytics platform</h3>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
            <p>jkdhaskjdahsdkjha</p>
        </div>
    }

    prepSkills(Skills: BadgeProps[]): JSX.Element[] {
        return Skills.map(skill => <Badge text={skill.text}/>)
    }
}