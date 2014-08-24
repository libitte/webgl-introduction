##  Try WebGL

step-1: 描画先になるCanvasオブジェクトを取得する

```javascript
var canvas = document.getElementById('webgl-canvas');
```

step-2: レンダリングコンテキストを取得する

```javascript
var gl = canvas.getContext('webgl');
```

step-3: WebGLの命令を発行する

```javascript
gl.clearColor(0, 0, 0, 1); //R,G,B,A
gl.clear(gl.COLOR_BUFFER_BIT);
```
