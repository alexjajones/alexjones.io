import {h, Component} from 'preact'
import {fetchEntriesForContentType} from "../../services/contentful";
import PostListComponent from "components/post-list/post-list";
import {Post} from "pages/blog/blog.model";

interface BlogModel {
    posts: Post[]
}

export default class BlogComponent extends Component<BlogModel, any> {
    public componentDidMount() {
        fetchEntriesForContentType().then(posts => this.setState({posts: posts}))
    }

    public render() {
        return <div className='blog'>
            <PostListComponent posts={this.state.posts || []}/>
        </div>
    }
}