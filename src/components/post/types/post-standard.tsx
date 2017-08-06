import {h, Component} from 'preact'
import {Post, PostTag} from "pages/blog/blog.model";
import BadgeComponent from "components/badge/badge";
import {MarkdownParser} from "../../../services/markdown-parser";

interface BlogStandardPostModel {
    post: Post
}

export default class PostStandardComponent extends Component<BlogStandardPostModel, any> {
    private generateTags(tags: PostTag[]) {
        return tags.map(tag => <BadgeComponent text={tag}/>)
    }

    public render(props: BlogStandardPostModel) {
        return <div className='blog-post-preview'>
            <h2>{props.post.fields.opening}</h2>
            <div>{this.generateTags(props.post.fields.tags)}</div>
            <p>{props.post.fields.overview}</p>
            <div dangerouslySetInnerHTML={{__html: MarkdownParser.render(props.post.fields.content)}}/>
        </div>
    }
}