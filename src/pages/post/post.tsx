import {h, Component} from 'preact'
import PostComponent from "components/post/post";
import {fetchEntry} from "../../services/contentful";

interface BlogPagePostModel {
    match: any
}

export default class PostPageComponent extends Component<BlogPagePostModel, any> {
    public componentWillMount() {
        fetchEntry(this.props.match.params.post_id).then((post) => this.setState({post}))
    }

    public render() {
        if (this.state.post) {
            return <div className='blog-post-preview'>
                <PostComponent post={this.state.post}/>
            </div>
        }

        return <div>waiting ...</div>
    }
}