import React, {Component} from 'react'
import './app.css'
import Add from './components/add/Add.jsx'
import List from './components/list/List.jsx'

export default class App extends Component {
    render(){
        return (
            <div>
                {/* class 要换成 className */}
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                        <div className="col-xs-12">
                            <h1>请发表对React的评论</h1>
                        </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    {/* Add */}
                    <Add/>
                    {/* List */}
                    <List/>
                    
                </div>
            </div>
        )
    }
}
