# 注意事项

1. 无论是单标签还是多标签 得注意闭合
2. 函数式组件和类组件
3. 插值表达式
4. jsx 是可以将 javascript 和 html 混写的 例如
   ```
   dicContent=<span>flag为true</span>
   ```
5. 遍历数组 map 具有返回值

```
cosnt liat=[
    {id:1,name:"xiaoww"}
]
const Listcontent=list.map(item=>(<li key="item.id">{item.name}</li>)
```

6. key 去保证当前元素的唯一性 **在同级范围内**
7. useState 状态 响应式数据
   - 对象结构是不能再视图中直接呈现的
   ```
   const [data,setData]=useState({
    title:'默认标题',
    content:'默认内容'
   })
    function handleClick(){
        setData({
            title:"新标题“,
            // 这里提供一个对象展开运算符功能...
            ... //这样对于属性比较多的对象带来便利性，然后把要修改的内容放在后面 后面的内容会替换前面的内容
            content:"默认内容"
        })
        //此处需要注意点就是setData的作用是将旧值直接替换 而不是局部的修改
    }
   return (
    <>
    <div title={data.title>{data.Content}</div>
    <button onClick={handClick}>按钮</button>
    </>
   )
   ```
   - 数组的操作情况
   ```
   const [data,setData]=useState([
    {id:1,name:"xiaowu"}, {id:2,name:"xiaohua"}
    ])
    const listData=data.map(item=>(
        <li key={item.id}>{item.name}</li>
    ))
    var id=3;
    function handleClick(){
        setData({
          ...data,
          {id:++id,name:"小花猫"}
          // 删除默认元素的话使用filter setData(data.filter(item=>item.id!==2))
        })
        //此处需要注意点就是setData的作用是将旧值直接替换 而不是局部的修改
    }
   return (
    <>
    <div title={data.title>{data.Content}</div>
    <button onClick={handClick}>按钮</button>
    <ul>{listData}</ul>
    </>
   )
   ```
