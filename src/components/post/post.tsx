import {h, Component} from 'preact'
import {Post} from "pages/blog/blog.model";
import PostPreviewComponent from "components/post/types/post-preview";
import PostStandardComponent from "components/post/types/post-standard";

interface BlogPostModel {
    post: Post,
    preview?: boolean
}

export default class PostComponent extends Component<BlogPostModel, any> {
    private postPicker(props: BlogPostModel) {
        if (props.preview)
            return <PostPreviewComponent post={props.post}/>;
        else
            return <PostStandardComponent post={props.post}/>;
    }

    public render(props: BlogPostModel) {
        return <div className="blog-post">
            {this.postPicker(props)}
        </div>
    }
}