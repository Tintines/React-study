import React,{Component} from 'react'

export default class HomeMessageDetail extends Component{

  state = {                 // 模拟已经从服务器端拿到了数据
    messageDetails: [
      {id: 1, title: '消息1', content: '我爱你, 中国'},
      {id: 2, title: '消息2', content: '我爱你, atguigu'},
      {id: 3, title: '消息3', content: '我爱你, 孩子'},
      {id: 4, title: '消息4', content: '我爱你, 0719'},
      {id: 5, title: '消息5', content: '我爱你, 龙哥'},
    ]
  }

  render(){
    console.log('我是hmd的实例',this.props.match.params.id);
    let {id} = this.props.match.params        // 得到的是一个字符串类型的id值!!!!!
    let {messageDetails} = this.state
    let obj = messageDetails.find((item)=>{   // 找到一个就返回,停止继续查找
      return item.id === id*1                 // id*1 转成数字
    })
    if(obj){
      return (
        <ul>
          <li>编号:{obj.id}</li>
          <li>标题:{obj.title}</li>
          <li>内容:{obj.content}</li>
        </ul>
      )
    }else{
      return <h3>暂无数据展示</h3>
    }
  }
}