import React,{Component} from 'react'

export default class About extends Component{
    /* 路由的切换显示/隐藏是通过卸载该注册路由组件来完成的, 该函数会被触发 */
    componentWillUnmount(){
        console.log('About------componentWillUnmount');
    }
    render(){
        return (
            <h3>我是About的内容</h3>
        )
    }
}