import React, { Component } from "react";
import './css/Item.css'
export default class Item extends Component {
  render() {
    return (
        <li className="list-group-item">
            <div className="handle">
                {/* href标签跟ID来进行占位 #1 */}
                <a href="#1">删除</a>
            </div>
            <p className="user">
                <span>xxx</span>
                <span>说:</span>
            </p>
            <p className="centence">React不错!</p>
        </li>
    );
  }
}
