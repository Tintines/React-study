import React, {Component} from 'react'
import Item from '../item/Item.jsx'
import './css/List.css'
export default class List extends Component {
    // let {deleteComment} = this.props;
    render(){
        /* 接收父组件的数据,中转给下一个子组件!!! */
        let {comments, deleteComment} = this.props;
        return(
            <div className="col-md-8">
            <h3 className="reply">评论回复：</h3>
            {/* style 标签后面必须是双大括号{{}}, 且里面 名不需要 引号引起来!!! */}
            <h2 style={{ display: "none" }}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">
                {/* Item 使用map对子组件的每一项进行加工后返回*/}
                {
                    comments.map((item)=>{
                        // 接收父组件的数据,中转传递给下一个子组件!!!
                        // 添加要传递的数据和方法  
                        // {...item}得到的是一个个的对象, key={item.id}标识每一个子组件的唯一key用于diff计算更新
                        return <Item {...item} key={item.id} deleteComment={deleteComment}/>
                        /* 完整版写法 */
                        // return <Item id={item.id} name={item.name} content={item.content} key={item.id}/>
                    })
                }      
            </ul>
        </div>
        )
    }
}