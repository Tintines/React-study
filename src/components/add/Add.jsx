import React, { Component } from "react";
import {v4 as uuid} from 'uuid'         // 用于手动生成唯一标识ID

export default class Add extends Component {
    /* 定义方法收集提交数据 */
    add = ()=>{
        /* 接收父组件传递给的参数 */
        let {addComment} = this.props;
        // 1.获取用户输入
        let name = this.name.value;
        let content = this.content.value;
        // 2.校验数据
        if(!name.trim() || !content.trim()){
            alert('名字和评论均不能为空!')
            return
        }
        // 3.将输入的数据维护到状态中,通过调用父组件传递过来的函数完成
        addComment({id: uuid(), name, content})
        // 4.清空输入框
        this.name.value = '';
        this.content.value = '';
    }

    render() {
        return (
        <div className="col-md-4">
            <form className="form-horizontal">
            <div className="form-group">
                <label>用户名</label>
                {/* input 标签要自结束 */}
                {/* 添加ref用于获取输入框对像 */}
                <input ref={(name)=>{this.name=name}} type="text" className="form-control" placeholder="用户名" />
            </div>
            <div className="form-group">
                <label>评论内容</label>
                <textarea ref={(content)=>{this.content=content}}
                className="form-control"
                rows="6"
                placeholder="评论内容"
                ></textarea>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    {/* 添加点击添加方法函数 */}
                <button onClick={this.add} type="button" className="btn btn-default pull-right">
                    提交
                </button>
                </div>
            </div>
            </form>
        </div>
        );
    }
}
