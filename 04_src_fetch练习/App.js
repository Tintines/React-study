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
        
        /* 使用fetch原生函数发送异步请求, 关注分离原则 */
        fetch(URL)
            .then((response)=>{         // fetch中返回的进入第一个then的promise表示是否与服务器连接成功,不包含服务器返回的数据
                if (response.statusText !== 'OK'){      // 该回调专门用于判断是否与服务器连接成功与否
                                                        // 小问题:必须对服务器返回的状态加以判断,是成功的状态还是失败的状态, 
                                                        // 不加判断时,即使失败状态也相当于服务器给与回复,会进入到下一个成功的then中造成错误
                    return Promise.reject(new Error('请求资源失败'))    // 用于后续catch捕获该错误
                } else {                                
                    return response.json();             // 必须返回该promise实例,使得下一个then才可以获得服务器返回的成功数据        
                }
            })
            .then((result)=>{                           // 该回调专门用于获取上一步then成功后服务器返回的数据
                console.log(result);                    // 不清楚服务器返回的数据结构时,就打印出来看一下
                let {name, html_url} = result.items[0];
                // 更新状态数据
                this.setState({
                    repoName: name,
                    respoUrl: html_url,
                    isLoading: false
                })
            })
            .catch((reason)=>{
                console.log(reason);
                this.setState({
                    isLoading: false,
                    error: reason.message
                })
            })
        
        
        
        
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