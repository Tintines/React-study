import React,{Component} from 'react'
import axios from 'axios'

export default class Search extends Component{
    /* 新语法 */
    myRef = React.createRef();

    /* 定义search方法 */
    search = ()=>{
        const {updateAppState} = this.props;
        // 1.获取用户输入
        let keyWord = this.myRef.current.value;
        // 2.校验数据
        if(keyWord.trim() === '') return;
        // 3.1发送请求
        const URL = `https://api.github.com/search/users?q=${keyWord}`
        // 3.2更新数据
        // 请求之前更新数据,为了展示loading
        updateAppState({
            users: [],
            isFirst: false,
            isLoading: true,
            error: ''
        })
        axios.get(URL)
            .then((value)=>{
                // 若成功,更新数据
                updateAppState({
                    users: value.data.items,    // 将请求回来的数据更新至状态数据中,
                                                // 此时取到的数据是个数组,由服务器端返回的数据结构决定
                    isFirst: false,
                    isLoading: false,
                    error: ''
                })
            })
            .catch((error)=>{
                // 若失败,更新数据
                updateAppState({
                    users: [],
                    isFirst: false,
                    isLoading: false,
                    error: error.message
                })
            })
        // 4.清空输入
        this.myRef.current.value = ''
    }
    render(){
        return (
            <div>
                {/* 通过ref获取输入框对象 */}
                <input ref={this.myRef} type="text" placeholder="enter the name you search" />
                &nbsp;<button onClick={this.search}>Search</button>
            </div>
        )
    }
}