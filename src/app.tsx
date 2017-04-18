import { h, render } from 'preact';
import Home from "./pages/home/home";

import './core/styles/global.scss'

render(<Home title="This is a title" />, document.querySelector('#app')!);