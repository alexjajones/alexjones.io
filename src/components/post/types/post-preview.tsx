import {h, Component} from 'preact'
import {Post} from "pages/blog/blog.model";

interface BlogPreviewPostModel {
    post: Post
}

export default class PostPreviewComponent extends Component<BlogPreviewPostModel, any> {
    public render(props: BlogPreviewPostModel) {
        return <div className='blog-post-preview'>
            <h2>{props.post.fields.opening}</h2>
            <p>{props.post.fields.overview}</p>
        </div>
    }
}