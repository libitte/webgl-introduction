##  Draw Triangles

```javascript
// 1.描画先になるCanvasオブジェクトを取得する
var canvas = document.getElementById('webgl-canvas');
// 2.レンダリングコンテキストを取得する
var gl = canvas.getContext('webgl');

gl.clearColor(0, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

/*
 * 演算器の準備
 * GPU のプログラムをセットアップする
 */
// シェーダの用意
var vertexShaderSource = '\
  precision mediump float;\
  attribute vec2 vertex;\
  void main() {\
    gl_Position = vec4(vertex, 0.0, 1.0);\
  }\
';

var fragmentShaderSource = '\
  precision mediump float;\
  void main() {\
    gl_FragColor = vec4(1.0, 0.7, 0.6, 1.0);\
  }\
';

var vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.bindAttribLocation(shaderProgram, 0, 'vertex');
gl.linkProgram(shaderProgram);

gl.useProgram(shaderProgram);

/*
 * データの用意
 * GPU 側にデータを送り込む
 */
// 描画データの用意 (x,y の組が並んでいる)
var vertexData = [
  -0.6,-0.4, -0.6,0.4, 0.6,-0.4,
  0.6,-0.4, 0.6,0.4, -0.6,0.4,
  -0.6,0.1, -0.7,0, -0.6,-0.1,
  0.6,0.1, 0.7,0, 0.6,-0.1,
  -0.4,-0.4, -0.3,-0.5, -0.2,-0.4,
  0.2,-0.4, 0.3,-0.5, 0.4,-0.4
];

var vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(0);

/*
 * GO!
 */
// 書いてある頂点の中で、0番目から18個分の頂点までを描画せよ
gl.drawArrays(gl.TRIANGLES, 0, 18);
```
