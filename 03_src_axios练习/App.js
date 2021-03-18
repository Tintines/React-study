import React, {Component} from 'react'
import axios from 'axios'

export default class App extends Component {
    /* 使用axios发送ajax异步请求 */
    /* 初始化状态数据 */
    state = {
        repoName:'',    //仓库的名字
        respoUrl:'',    //仓库的地址
        keyWord:'v',    //搜索的关键词
        isLoading:true, //控制是否展示Loading....
        error:''        //错误, 该字段在请求信息中必然存在!只是展示不展示的问题
    }

    /* 页面挂载渲染后执行 */
    componentDidMount(){
        const URL = `https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=stars`;
        /* 使用axios发送ajax请求 */
        axios.get(URL)
            .then((value)=>{
                let {name, html_url} = value.data.items[0];
                // 更新状态数据
                this.setState({
                    repoName: name,
                    respoUrl: html_url,
                    isLoading: false
                })
            })
            .catch((reason)=>{
                // 更新状态数据
                this.setState({
                    isLoading: false,
                    error: reason.message
                    /* error在state中定义的字符串, 而reason常规为一个new Error的实例对象, 
                    所以要取出该对象里面的具体错误字符串类型信息!! */
                })
            })
    }

    render(){
        const {repoName, respoUrl, isLoading, error, keyWord} = this.state;
        // 判断状态进行输出
        if(isLoading) {
            return <h2>Loading......</h2>
        } else if (repoName && respoUrl && !error){
            return <h2>在GitHub上以[{keyWord}]字母开头的仓库中, 点赞最多的是<a href={respoUrl}>{repoName}</a></h2>
        } else {
            /* style标签右侧要写成双大括号的形式{{}}  !!!!! */
            return <h2 style={{color:'red'}}>{error}</h2>
        }
    }
}