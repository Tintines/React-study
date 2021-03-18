## 要点
### 创建项目并启动
```
npm install -g create-react-app   (只需要安装一次)
create-react-app hello-react	在指定的目录下运行
cd hello-react
npm start
```

* jsx文件中标签必须要闭合, 常见错误未闭合标签 input 
* jsx语法 使用className= 全局查找替换class=
* style标签双括号 style={{display:'none'}}
* 在a标签中临时改成锚点 href='#1'
* 成型的第三方库 要放到public中

a.遇到 <开头的代码, 以标签的语法解析: html同名标签转换为html同名元素, 其它标签需要特别解析
b.遇到以 { 开头的代码，以JS语法解析: 标签中的js表达式必须用{ }包含

JSX 语法基础
React 使用 JSX 来替代常规的JavaScript。
JSX 是按照 XML 语法规范 的 JavaScript  语法扩展。
JSX 有以下优点：

JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化；
它是类型安全的，在编译过程中就能发现错误；
使用  JSX 编写模板更加简单快速。

# JSX 语法的本质：
  并不是直接把 JSX 渲染到页面上，而是内部先转换成了 createElement 形式，再渲染的。
## JSX 注释：
  推荐使用 {/* 这是注释 */}；
## JSX中添加class类名：
  需要使用 className 来替代 class ；htmlFor 替代 label 的 for 属性；
在JSX创建DOM的时候，所有节点必须有唯一的根元素进行包裹；
在JSX语法中，标签必须成对出现，如果是单标签，则必须自闭和；

作者：柯晓楠
链接：https://juejin.cn/post/6844904111683420173
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。