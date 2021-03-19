import React from 'react' 
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    /* 使用<BrowserRouter>包裹主组件,实现自由路由!! */
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById('root'))