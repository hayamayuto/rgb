
<!DOCTYPE.html>
<html lang="ja">
<meta charset="UTF-8">
<head>
<title>バナナ糖度計</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
</head>
<style>
h1 {
  font-weight: normal;
  font-size: 26px;
	position: relative;
	margin-bottom: 0;
	text-align: center;
}
h1:before {
	content: '';
	position: absolute;
	bottom: -15px;
	display: inline-block;
	width: 10%;
	height: 5px;
	left: 50%;
	transform: translateX(-50%);
	background-color: #ffe135;
	border-radius: 2px;
}
  p {
    font-size:16px;
    line-height:2;
    width:90%;
    margin:auto;
  }
</style>
<body>
<h1>最新式バナナ糖度計</h1>
<br>
<div style="text-align:center">
<img src="img/logo.jpg" style="width:20%;margin-top:2px;margin-bottom:2px"><br>
</div>
<p>
バナナの画像を「ファイルを選択」からアップロードすると自動で糖度を推定します。<br>
・できるだけバナナが写真の中央に位置し、全体を含むようにしてください。<br>
・背景が白いほうが正確性が向上します。（
<a href="https://www.remove.bg/">removebg<a>
を使用して背景を削除することを推奨します。）<br>
・APIに対応していない場合は、ファイルを読み込めない場合があります。
</p>
<div style="margin:auto;width:30%;">
<span id="progress" style="color:#0000FF;font-weight:bold"></span><br>
<progress id="progressbar"></progress><br>
<input id="file" class="upload" type="file" style="margin-bottom:5px;;margin-top:5px" onclick="ClearFile();"><br>
<input type="button" value="画像をクリア" onclick="ClearCanvas();"><br>
<b>糖度（Brix％）: </b><input id= "result" type="text" style="font-weight:bold;width:100px;margin-top:8px;margin-bottom:5px;">
<form name = "form0" style="margin-bottom:2px">画像を下に表示する<input type="checkbox" checked = "checked"></form>
</div><br>
<canvas id="canvas"></canvas>
<script src="banana.js"></script>
</body>
</html>
