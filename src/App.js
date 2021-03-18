import React, {Component} from 'react'
import Add from './components/add/Add.jsx'
import List from './components/list/List.jsx'

export default class App extends Component {
    /* 将数据保存到共同的父组件身上 */
    /* state 状态数据简写方式 */
    state = {
        comments: [         // 思考该数据结构设计为: 数组包含一个个对象
            {id:'ud7tudjf7tje83h8g7',name:'班长',content:'我觉得很简单'},
            {id:'ab7tudjf7tje83h8g8',name:'龙哥',content:'我是没学，学了我也会'},
            {id:'cd7tudjf7tje83h8g9',name:'老师',content:'其实没那么难'}
        ]
    }

    /* 状态在哪更新状态数据的方法就在哪 */
    /* 添加一条评论, 该方法用于获取子组件提交的数据 */
    addComment = (commentObj)=>{
        /* 
            特别注意：state中的数据：1.不能直接修改 2.不能直接更新(对象类型要断开引用关系(使用深拷贝))
            一般来说，如果状态里的数据是对象类型，我们进行原状态修改时，会创建一个新对象随后再操作!!
        */
        // 1.获取原状态
        // let {comments} = this.state;     // 不要这样获取状态中的对象类型数据(浅拷贝),
                                            // 此时引用地址相同,后期修改的就是原始数据!!(不能这样操作)
        let comments = [...this.state.comments]     // 得到一个新的对象!见到数据中有对象,数组就这样写
        // 2.追加数据
        comments.unshift(commentObj);
        // 3.将新数据维护到状态中
        this.setState({comments});
    }

    /* 用于删除一条评论的方法, 需要传递给他孙子使用 */
    deleteComment = (id)=>{
        // 1.获取原始状态
        let comments = [...this.state.comments];   // 状态数据中有对象或数组时就这样取法!
        // 2.删除数组中id与子组件调用方法传过来的id相同的那个对象
        // 使用filter来进行过滤返回符合条件的新数组,删除不符合的数据
        comments = comments.filter((item)=>{
            return item.id !== id;
        })
        // 3.更新状态
        this.setState({comments});
        /* 使用map对每一项数据进行加工, 不推荐 */
        /* comments.map((item, index)=>{
            if (item.id === id){
                comments.splice(index, 1)
            }
        }) */     
    }
    render(){
        /* 获取render函数外面状态中的数据 , 解构赋值*/
        /* 写在这的原因: 函数作用域, 以及数据要在哪使用 */
        /* 作用域不同保证此处的comments和函数外面同名那个本质是不一样的,由于此处不会修改状态数据,此种写法也是可以的
            若需要修改状态中的数据,则不能这样书写 */
        let {comments} = this.state;
        return (
            <div>
                {/* class 要换成 className */}
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                        <div className="col-xs-12">
                            <h1>请发表对React的评论</h1>
                        </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    {/* Add 将addComment 这方法传递给子组件*/}
                    <Add addComment = {this.addComment}/>
                    {/* List 将状态数据传递给子元素*/}
                    <List comments={comments} deleteComment={this.deleteComment}/>
                    
                </div>
            </div>
        )
    }
}
