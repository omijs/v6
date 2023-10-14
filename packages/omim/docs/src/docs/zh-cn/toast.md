## Toast

对用户操作或者请求进行反馈的小弹出层。

## 使用

```js
import toast from 'omim/toast'

//显示 loading
toast.showLoading()

//显示自定义 svg icon
toast.show({
  path: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z',
  text: '支付成功'
})

//隐藏弹出层
toast.hide()
```

