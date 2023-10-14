webpackJsonp([0],{75:function(n,s){n.exports="\n## Update\n\n`update` \u65b9\u6cd5\u662f\u5185\u7f6e\u7684\u91cd\u8981\u6838\u5fc3\u65b9\u6cd5\uff0c\u7528\u4e8e\u66f4\u65b0\u7ec4\u4ef6\u81ea\u8eab\u3002\u6bd4\u5982:\n\n```js\nthis.update()\n```\n\n\u4e5f\u53ef\u4ee5\u4f7f\u7528 forceUpdate \u5728 html \u6a21\u5f0f\u4e0b\u5ffd\u7565 attributes:\n\n```js\nthis.forceUpdate()\n```\n\n\u4e3e\u4e2a\u573a\u666f\uff0c\u6bd4\u5982\u70b9\u51fb\u5f39\u51fa\u5c42\u7684 mask \u5173\u95ed\u5f39\u51fa\uff0c\u5728 react \u4e2d\u9700\u8981\u4f20\u9012\u7ed9\u7236\u7ec4\u4ef6\uff0c\u8ba9\u7236\u7ec4\u4ef6\u66f4\u65b0\uff0c\u800c Omi \u63a8\u5d07\u81ea\u66f4\u65b0\uff0c\u8fd9\u6837 diff \u7684\u533a\u57df\u66f4\u5c0f\u3002\n\n```js\nonMaskClick = ()=> {\n  //\u4fee\u6539 props\n  this.props.show = false\n  //\u9632\u6b62\u7236\u7ec4\u4ef6\u66f4\u65b0 diff \u4e0d\u51fa\u7ed3\u679c\n  this.prevProps.show = false\n  //\u66f4\u65b0\uff0c\u5e76\u4e14\u5728 html \u6a21\u5f0f\u4e0b\u5ffd\u7565 attributes\n  this.forceUpdate()\n  //\u89e6\u53d1\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u66f4\u6539\u5916\u90e8\u7684\u72b6\u6001\u53d8\u91cf\u6765\u4fdd\u6301\u4e00\u81f4\u6027\uff0c\u4f46\u662f\u5916\u9762\u7684\u7ec4\u4ef6\u4e0d\u7528\u518d\u66f4\u65b0\n  this.fire('close')\n}\n```\n\n\u4e5f\u53ef\u4ee5\u4f7f\u7528 updateProps \u8fbe\u5230\u540c\u6837\u7684\u6548\u679c:\n\n```js\nonMaskClick = ()=> {\n  //\u4fee\u6539 props \u5e76\u5f3a\u5236\u66f4\u65b0\n  this.updateProps({\n    show: false\n  })\n  //\u89e6\u53d1\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u66f4\u6539\u5916\u90e8\u7684\u72b6\u6001\u53d8\u91cf\u6765\u4fdd\u6301\u4e00\u81f4\u6027\uff0c\u4f46\u662f\u5916\u9762\u7684\u7ec4\u4ef6\u4e0d\u7528\u518d\u66f4\u65b0\n  this.fire('close')\n}\n```\n\n### UpdateSelf\n\n![](https://github.com/Tencent/omi/raw/master/assets/update.png)\n\n`updateSelf` \u65b9\u6cd5\u4e0d\u4f1a\u66f4\u65b0\u5b50\u7ec4\u4ef6\u3002\n"}});
//# sourceMappingURL=0.fd235d37.chunk.js.map