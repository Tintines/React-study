import React, { Component } from "react";
import './css/Item.css'

export default class Item extends Component {
  /* 定义删除的方法 */
  delete = (id)=>{    // 在状态中删除该条评论---获取该条评论的id
    // 获取父组件传递过来的真正操作状态数据方法
    const {deleteComment} = this.props;
    // 要使用confirm必须使用window.confirm的形式
    if (window.confirm("确认删除吗?")){
      deleteComment(id);
    }
  }

  render() {
    /* 获取父组件传递过来的状态数据 */
    let { name, content, id} = this.props;
    return (
        <li className="list-group-item">
            <div className="handle">
                {/* href标签跟ID来进行占位 #1 */}
                {/* 调用删除方法 */}
                {/* 事件中如果调用需要传参数的函数,需要外层使用箭头函数包裹起来,否则该函数立即执行!出问题 */}
                <a onClick={()=>{this.delete(id)}} href="#1">删除</a>
            </div>
            <p className="user">
                <span>{name}</span>
                <span>说:</span>
            </p>
            <p className="centence">{content}!</p>
        </li>
    );
  }
}
