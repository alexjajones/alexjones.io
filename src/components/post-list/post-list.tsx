import {h, Component} from 'preact'
import {Post} from "pages/blog/blog.model";
import PostComponent from "components/post/post";
import {Link} from 'react-router-dom'

interface BlogPostListModel {
    posts: Post[]
}

export default class PostListComponent extends Component<BlogPostListModel, any> {
    public render(props: BlogPostListModel) {
        return <div className='blog-post-list'>
            {props.posts.map(post => <Link to={"/post/" + post.sys.id}>
                <PostComponent post={post} preview={true}/>
            </Link>)}
        </div>
    }
}