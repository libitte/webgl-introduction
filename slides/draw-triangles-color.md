##  Draw Triangles - Color

* (R, G, B, A) で色を指定します
* OpenGL での色指定はRGBのみ

```javascript
var fragmentShaderSource = '\
  precision mediump float;\
  void main() {\
    gl_FragColor = vec4(1.0, 0.7, 0.6, 1.0);\
  }\
';
```

