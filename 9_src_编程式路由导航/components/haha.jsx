import React,{Component} from 'react'

export default class Haha extends Component{

  componentDidMount(){
    console.log('我是Haha组件（一般组件）我的实例是：',this);   // 一般组件身上的props 属性值为空(等待外部传入)
  }

  render(){
    return (
      <div>哈哈</div>
    )
  }
}