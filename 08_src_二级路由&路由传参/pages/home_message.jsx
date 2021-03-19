import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessageDetail from './home_message_detail'

export default class HomeMessage extends Component{

  state = {           // 初始化状态数据,, 因为正产情况下,数据为空,需要向服务器发送请求后,
    messageArr:[]     // 等待服务器返回数据后, 再更新到状态数据中,页面自动渲染刷新
  }

  componentDidMount(){      // 发送ajax请求时机
    setTimeout(()=>{        // 模拟向服务器发送请求
      this.setState({       // 将服务器返回的数据更新到状态数据中
        /* 设计数据: 页面上简简单单呈现的数据, 都需要通过服务器已特定的数据结构传递过来 */
        /* 那么保存数据的时候,就要考虑要怎样进行存储, 之后通过什么样的方法进行读取 */
        /* 面向对象的设计,那么数据整体框架也简易采用对象的存储方式,通过一组组的key与value的组合来实现 */
        /* 存储对象时的必要属性key-value: ID-ID值, 数据名字-数据,等等 */
        messageArr:[
          {id:1,title:'messages1'},
          {id:2,title:'messages2'},
          {id:3,title:'messages3'},
          {id:4,title:'messages4'},
          {id:5,title:'messages5'},
        ]
      })
    },1000)
  }

  render(){
    let {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((item)=>{    /* 返回每一项都被加工后的数组! */
              return (
                <li key={item.id}>      {/* 给需要遍历的父元素加key!!! */}
                  {/* 想要使用模板字符串,需要给外层包裹一个大括号 {} */}
                  <Link to={`/home/message/detail/${item.id}`}>{item.title}</Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr/>
          {/* :id 占位符 */}
          <Route path="/home/message/detail/:id" component={HomeMessageDetail}/>
      </div>
    )
  }
}