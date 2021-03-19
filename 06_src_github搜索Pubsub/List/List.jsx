import React,{Component} from 'react'
import Item from '../Item/Item.jsx'
import Pubsub from 'pubsub-js'

export default class List extends Component{

    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        error:''
    }
    componentDidMount(){
        Pubsub.subscribe('ziyan',(msg,data)=>{  
          this.setState(data)
      })
    }

    render(){
        // const {users, isFirst, isLoading, error} = this.props;
        /* 采取订阅时直接从自己的状态中获取状态数据 */
        const {users, isFirst, isLoading, error} = this.state;
        if(isFirst){
            return <h2>请输入关键字来进行搜索</h2>
        } else if (isLoading) {
            return <h2>loading.....</h2>
        } else if (error) {
            return <h2>{error}</h2>
        } else {
            return (
                <div className="row">
                    {/* Item 组件 */}
                    {
                        users.map((item)=>{
                            /* 遍历的时候必须加上key!!! */
                            return <Item key={item.login} {...item}/>
                        })
                    } 
                </div>
            )
        }
    }
}