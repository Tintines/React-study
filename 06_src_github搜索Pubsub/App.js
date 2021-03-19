import React,{Component} from 'react'
import Search from './Search/Search.jsx'
import List from './List/List.jsx'

export default class App extends Component{
    /* 初始化状态数据 */
    /* state = {
        users: [],          // 用户数组
        isFirst: true,      // 页面初次加载未搜索时显示信息
        isLoading: false,   // 点击搜索,信息正在加载
        error: ''           // 比包含错误信息字段
    }
 */
    /* 更新状态数据的方法 */
    /* updateAppState = (obj)=>{
        // 传递接收的obj必须是初始定义的数据格式
        this.setState(obj)
    } */

    render(){
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    {/* Search 组件 */}
                    {/* <Search updateAppState={this.updateAppState}/> */}
                    <Search/>
                </section>
                {/* List 组件 */}
                {/* 将状态数据传递给list子组件 */}
                {/* <List {...this.state}/> */}
                <List/>
            </div>
        );
    }
    }