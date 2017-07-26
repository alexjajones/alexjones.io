import {h, Component} from 'preact';
import './badge.scss'

export interface BadgeProps {
    text: string
}

export default class BadgeComponent extends Component<BadgeProps, any> {
    render(props: BadgeProps) {
        return <div className='badge'>
            {props.text}
        </div>
    }
}