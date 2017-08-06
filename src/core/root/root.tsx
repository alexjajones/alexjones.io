import {h, Component} from 'preact';
import Header from "./header/header";
import Footer from "./footer/footer";
import Routes from "../routes";

import {BrowserRouter as Router, Route} from 'react-router-dom'

/**
 * Root Component that is initially loaded and wraps the main content
 */

export default class RootComponent extends Component<{}, any> {
    public render() {
        return <Router>
            <div className="app">
                <Header/>
                <div className="container">
                    <Routes/>
                </div>
                <Footer/>
            </div>
        </Router>
    }
}