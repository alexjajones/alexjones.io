import {h, Component} from 'preact'
import {Route} from 'react-router-dom'

import HomeComponent from "pages/home/home";
import AboutComponent from "pages/about/about";
import BlogComponent from "pages/blog/blog";
import PostPageComponent from "pages/post/post";

export default class RoutesComponent extends Component<{}, any> {
    render() {
        return <div>
            <Route path="/home" component={HomeComponent}/>
            <Route path="/about" component={AboutComponent}/>

            <Route path="/blog" component={BlogComponent}/>
            <Route path="/post/:post_id" component={PostPageComponent}/>
        </div>
    }
}