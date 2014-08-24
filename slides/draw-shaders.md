##  draw shaders

```javascript
var canvas = document.getElementById('webgl-canvas');
var gl = canvas.getContext('webgl');

gl.clearColor(0, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

// シェーダの用意
var vertexShaderSource = '\
	precision mediump float;\
	uniform vec2 offset;\
	attribute vec2 vertex;\
	void main() {\
		gl_Position = vec4(vertex + offset, 0.0, 1.0);\
	}\
';

var fragmentShaderSource = '\
	precision mediump float;\
	uniform vec4 color;\
	void main() {\
		gl_FragColor = color;\
	}\
';

var vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

//バーテックスシェーダーの用意
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

//フラグメントシェーダの用意
var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.bindAttribLocation(shaderProgram, 0, 'vertex');
//2つシェーダをまとめてプログラムを作成する。
//プログラムを切り替えることでシェーダの動作が変わる。
gl.linkProgram(shaderProgram);

gl.useProgram(shaderProgram);

var locColor = gl.getUniformLocation(shaderProgram, 'color');
gl.uniform4f(locColor, 0.3, 0.9, 0.3, 1.0);
var locOffset = gl.getUniformLocation(shaderProgram, 'offset');
gl.uniform2f(locOffset, -0.3, 0.3);

// 描画データの用意
var vertexData = [
	-0.8,-0.8, 0.3,-0.6, -0.6,0.3,
	0.3,-0.6, 0.2,0.7, -0.6,0.3,
	0.3,-0.6, 0.7,0.2, -0.6,0.3
];

var vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(0);

// 描画
var t = 0;
setInterval(function(){
  t += 0.1;
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.uniform4f(locColor, 1.0, 0.7, 0.8 + Math.sin(t) * 0.2, 1.0);
  gl.uniform2f(locOffset, Math.cos(t), Math.sin(t));
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  gl.uniform4f(locColor, 0.3, 0.7, 0.3, 1.0);
  gl.drawArrays(gl.TRIANGLES, 3, 3);
  gl.uniform4f(locColor, 0.2, 0.3, 0.5, 1.0);
  gl.drawArrays(gl.TRIANGLES, 6, 3);
}, 100);
```
