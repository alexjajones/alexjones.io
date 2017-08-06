import {h, Component} from 'preact';

import './home.scss'
import {fetchEntriesForContentType} from "../../services/contentful";
import PostListComponent from "components/post-list/post-list";

export default class HomeComponent extends Component<{}, any> {
    public componentDidMount() {
        fetchEntriesForContentType().then(posts => this.setState({posts: posts}))
    }

    render() {
        return <div className='home'>
            <div className="content">
                <div className="recent-posts">
                    <h1>Recent Posts</h1>
                    <PostListComponent posts={this.state.posts || []}/>
                </div>
                <div className="activity-container">
                    <h1>Upcoming Talks</h1>
                    <p>Sept 26th 2017 - Javascript 101 Workshop</p>
                </div>
            </div>
        </div>
    }
}