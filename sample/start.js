var canvas = document.getElementById('webgl-canvas'); // 描画先になるCanvasオブジェクトを取得
var gl = canvas.getContext('webgl'); // レンダリングコンテキストを取得する
gl.clearColor(1, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
