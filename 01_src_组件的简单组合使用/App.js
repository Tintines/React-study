import React, {Component} from 'react'
import Jingjing from './components/jingjing/jingjing.jsx'
import Ziyan from './components/ziyan/ziyan.jsx'
export default class App extends Component {
    render() {
        return (
            <div>
                <h1>猪爸爸加油啊!!!</h1>
                <Jingjing/>
                <Ziyan/>
            </div>
        )
    }
}