import React,{Component} from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'

export default class App extends Component{
  render(){
    return (
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* replace: bool, 可简写为replace; 浏览器默认为push,可以回退,用的比较多;
                  如果为 true，则单击链接将替换历史堆栈中的当前入口(不能回退)，而不是添加新入口(push可以回退)。 */}
                  <NavLink className="list-group-item" to="/about" activeClassName="demo" replace>About</NavLink>
                  <NavLink className="list-group-item" to="/home" activeClassName="demo">Home</NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Redirect to="/about"/>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}