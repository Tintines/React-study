import React, {Component} from 'react'
import Item from '../item/Item.jsx'
import './css/List.css'
export default class List extends Component {
    render(){
        return(
            <div className="col-md-8">
            <h3 className="reply">评论回复：</h3>
            {/* style 标签后面必须是双大括号{{}}, 且里面 名不需要 引号引起来!!! */}
            <h2 style={{ display: "none" }}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">
                {/* Item */}
                <Item/>       
            </ul>
        </div>
        )
    }
}