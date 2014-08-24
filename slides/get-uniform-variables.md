##  get uniform variables

ハンドルを保存する

* シェーダ内の名前と合わせること
* `shaderProgram` は有効なシェーダプログラムでなければならない

```javascript
var locColor =
    gl.getUniformLocation(
        shaderProgram,
        'color'
    );
```
