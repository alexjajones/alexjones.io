import { h, render } from 'preact';
import Root from "./core/root/root"

import './core/styles/global.scss'

render(<Root/>, document.querySelector('#app')!);