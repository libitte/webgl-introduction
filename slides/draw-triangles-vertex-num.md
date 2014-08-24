##  Draw Triangles - Vertex Num

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 18);
```

* 0番目の頂点から、18 個の頂点を使う
* 指定するのは "頂点の個数" (三角形の個数ではない)
* TRIANGLES を他の値にすると描画形式が変わる
    * http://www.khronos.org/opengles/sdk/docs/man/xhtml/glDrawArrays.xml
    * http://d.hatena.ne.jp/nakamura001/20081231/1230719279
* 用意した座標データの個数と指定頂点の数をあわせること

