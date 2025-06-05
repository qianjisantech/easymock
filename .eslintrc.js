module.exports = {
  "root": true,
  "extends": "standard",
  "parser": "babel-eslint",
  rules: {
    'template-curly-spacing': 'off', // 关闭问题规则
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }] // 修复Vue模板错误
  },
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  },
  "plugins": [
    "html"
  ]
};
