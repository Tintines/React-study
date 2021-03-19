import React, {Component} from 'react' 
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'

export default class App extends Component {
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
                            {/* <BrowserRouter> 将其包到index中的App一般组件上,实现一劳永逸*/}
                                {/* 编写路由链接 */}
                                {/* 将a标签改为Link, 通过to指定去哪个路由 */}
                                {/* <NavLink>一个特殊版本的 Link，当它与当前 URL 匹配时，为其渲染元素添加样式属性!!!   */}
                                {/* 该样式临时被添加的public中的主页面头部进行测试,无需引入 */}
                                <NavLink className="list-group-item" to="/about" activeClassName="demo">About</NavLink>
                                <NavLink className="list-group-item" to="/home" activeClassName="demo">Home</NavLink>
                            {/* </BrowserRouter> */}
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* Switch实现,只要匹配上就不再继续匹配停止继续匹配路由 */}
                                <Switch>
                                    {/* 解决路由中出现多个/ 如/home/haha 导致样式丢失的问题,方法一去掉引入外部样式时最前面的那个小点 */}
                                    {/* 路由组件, 即注册路由组件 ; exact进行精准匹配 ,也可将较长的路由前移来解决匹配问题 */}
                                    <Route path="/home/haha" component={About} />
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home}/>
                                    {/* 根路由要放到后面,不然模糊匹配出错(即你注册的路由,包含于搜索地址栏输入的地址,就算匹配成功如/home/haha) */}
                                    <Redirect to="/about"/>
                                    {/* 路由的切换显示/隐藏是通过卸载该注册路由组件来完成的 */}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}