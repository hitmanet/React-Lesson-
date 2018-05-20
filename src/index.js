import React from 'react'
import {render} from 'react-dom'
import App from './Components/App'
import {articles} from "./fixtures";


const article = articles[0];
render(<App articles = {articles}/>, document.querySelector('#container'));
