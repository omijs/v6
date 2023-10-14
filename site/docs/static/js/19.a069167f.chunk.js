webpackJsonp([19],{56:function(s,n){s.exports="## Class\n\nOmi \u6709\u5185\u7f6e\u7684\u4e24\u4e2a class \u65b9\u6cd5 `classNames` \u548c `extractClass`\uff1a\n\n```js\nimport { classNames, extractClass } from 'omi'\n\ndefine('my-element', class extends WeElement {\n  render(props) {\n    //extractClass \u4f1a\u53d6\u51fa props \u7684  class \u6216 className \u5c5e\u6027\u5e76\u4e0e\u5176\u4ed6 classNames \u5408\u5e76\u5728\u4e00\u8d77\n    const cls = extractClass(props, 'o-my-class', {\n      'other-class': true,\n      'other-class-b': this.xxx === 1\n    })\n\n    return (\n      <div {...cls} {...props}>\n        Test\n      </div>\n    )\n  }\n})\n```\n\n\u4e0a\u9762\u7684 `classNames` \u548c npm \u4e0a\u7684 [classNames](https://www.npmjs.com/package/classnames) \u662f\u4e00\u6837\u7684\u3002"}});
//# sourceMappingURL=19.a069167f.chunk.js.map