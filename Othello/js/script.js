var ChengeList=[];				// ひっくりかえすリスト グローバル変数
var Turn="circle_black";		// 黒白どっちのターンか

function PutStone(event){

	color = Turn;			// 色

	// Non以外(すでに石がある)場合は置けない
	if(event.target.className != "Non")
	{	// Non以外
		return;
	}


	// 挟めるところがあるかチェック
	PutCheck(event.target.id, color);

	if(ChengeList.length > 0)
	{	// ひっくりかえせる石がある
		
		// 着手する
		let rc = document.querySelector("#"+event.target.id);
		rc.className = color;

		// ひっくり返す
		for(let i=0; i<ChengeList.length; i++)
		{
			let rtn = document.querySelector("#"+ ChengeList[i]);	// idを探す
			rtn.className=color;									// 色を変える
		}

		// ターンチェンジ (リストをクリア/情報の更新/手番を変える)
		// リストをクリア
		ChengeList.splice(0);			// インデックス0以降のすべての要素を削除


		// 情報の更新 手番の表示  石の数 試合終了か否か

		/*************messageセレクタ取得(ここに必要な情報を映す) ******/
		let message=document.querySelector(".message");
	
		/**************石の数を更新 ********************/
		// 石の数
		let board = document.querySelectorAll(".board td");	// ボード全体を取得
		let blackcount = 0;	// 黒の数
		let whitecount = 0;	// 白の数

		// 黒の数を探す
		for(let i=0; i<board.length; i++)
		{	// ボード全体から探す
			if(board[i].className=="circle_black")
			{
				blackcount++;	// 黒カウントアップ
			}
		}

		// 白の数を探す
		for(let i=0; i<board.length; i++)
		{	// ボード全体から探す
			if(board[i].className=="circle_white")
			{
				whitecount++;	// 黒カウントアップ
			}
		}

		let whitecountText = document.querySelector("#White_Count");	// 白の数 id
		let blackcountText = document.querySelector("#Black_Count");	// 黒の数 id
		whitecountText.textContent="黒の数："+ blackcount;
		blackcountText.textContent="白の数："+ whitecount;

		/**************試合終了の判定 ********************/
		// パス判定を使う
		// 互いにパス(打てる場所がない)なら、試合終了
		let EndCheckBlack = PassCheck("circle_black");	// 黒はパスか	
		let EndCheckWhite = PassCheck("circle_white");	// 白はパスか

		if( (EndCheckBlack==true) && (EndCheckWhite==true) )
		{
			message.textContent="Game Set!";
			return;
		}

		/**************パスの判定 ********************/
		// 手番を変えるかどうか判定(パスか?)
		let Pass = PassCheck(Turn);


		/**************手番の更新 ********************/
		if(Pass == true)
		{	// パス
			message.textContent="パス!";
			return;
		}
		else
		{	// パスでないなら手番を変える
			message.textContent ="";	// テキスト内容クリア
			
			let showturn = document.querySelector("#ShowTurn");	// 手番表示のid

			if(Turn == "circle_black")
			{
				Turn = "circle_white";
				showturn.className = "circle_white";
			}
			else
			{
				Turn = "circle_black";
				showturn.className = "circle_black";
			}
		}



	}
}

// _id:座標
// color:着手する色
function PutCheck(_id,color) {
	// 以下8パターンの組み合わせで隣接する石があるか判断する

	// アルファベット+1 数+1(右下)
	AddList(_id, 1, 1, color);		// ひっくりかえせるリストに入れる

	// アルファベット+1 数+0(右横)
	AddList(_id, 1, 0, color);		// ひっくりかえせるリストに入れる

	// アルファベット+1 数-1(右上)
	AddList(_id, 1, -1, color);		// ひっくりかえせるリストに入れる

	// アルファベット+0 数+1(真下)
	AddList(_id, 0, 1, color);		// ひっくりかえせるリストに入れる

	// アルファベット+0 数+0

	// アルファベット+0 数-1(真上)
	AddList(_id, 0, -1, color);		// ひっくりかえせるリストに入れる

	// アルファベット-1 数+1 (左下)
	AddList(_id, -1, +1, color);		// ひっくりかえせるリストに入れる
// alert(_id);

	// アルファベット-1 数+0(左横)
	AddList(_id, -1, 0, color);		// ひっくりかえせるリストに入れる

	// アルファベット-1 数-1(左上)
	AddList(_id, -1, -1, color);		// ひっくりかえせるリストに入れる


	return;
}

// _id：座標
// tate:縦列 (a～h) +1～-1
// yoko:横列 (1～8) +1～-1
// color: 着手する色 (クラス名 circle_black or circle_white)
function AddList(_id, tate, yoko, color)
{
	let tempList=[];
	let Turnflg = false;			// ひっくりかえせるかのフラグ

	while(true)
	{
		// 座標をずらす
		let temp = _id.split('');				// 1文字ずつ分解
		var acsii_1 = String.fromCharCode(temp[0].charCodeAt("")+tate);	// 1文字目(a～h)をずらす 1度ASCIIにしてから再変換
		var acsii_2 = String.fromCharCode(temp[1].charCodeAt("")+yoko);	// 2文字目(1～8)をずらす 1度ASCIIにしてから再変換

		_id = acsii_1 + acsii_2;					// id(座標)を作り直す
		if(acsii_1=="`"){break;}			// (保留) A列左をみるとなにか要素がとれてしまう? ためこれで対策

		// ずらした座標(id_temp)がひっくりかえせる色なのか判断する
		let rtn = document.querySelector("#"+_id);
		if(rtn==null)
		{	// 枠外に出る場合はすぐ終わる
			break;
		}

		if( rtn.className == color)
		{	// 自分の色
			Turnflg=true;						// ターンチェンジ
			break;								// ループを抜ける
		} 
		else if(rtn.className == "Non")
		{	// 黒白以外
			break;								// ループを抜ける
		}
		else if( (rtn.className == "circle_black") || (rtn.className == "circle_white") )
		{	// ひっくりかえせる色
			// ひっくり返すリストに追加
			tempList.push(_id);					// ひっくりかえせることが分かったのでリストに追加する
		}
	}

	// ループを自分の色で終了したらひっくりかえせるということ
	// その場合一時リストを正式リストに入れる
	// 自分の色だけの場合ひっくりかえせるのはないが、その場合リストに入るものもないから問題なし
	if(Turnflg==true)
	{	// ひっくりかえし可能

		ChengeList.splice(ChengeList.length, 0, ...tempList);
														// 1: 追加元配列のサイズ
														// 2: 開始インデックス
														// 3: 追加する配列

	}


}


// Turn: 着手した色
function PassCheck(Turn)
{
	let CheckColor ="";				// パスかチェックを行う色

	if(Turn == "circle_black")
	{
		CheckColor = "circle_white";
	}
	else
	{
		CheckColor = "circle_black";
	}


	// 盤面全体をチェックしその色で置ける場所があるか あるならfalse ないならtrue を返す

	// アキの場所(class="non")をすべてチェックする
	let CheckNon = document.querySelectorAll(".Non");		// class="Non"の場所をチェック

	for(let i=0; i<CheckNon.length; i++)
	{	// CheckColorの色をidの位置に着手できるか?
		// これを全アキマス分繰り返す
		PutCheck(CheckNon[i].id, CheckColor);
	}
	
	// PutCheckによりChengeListにひっくりかえせる石の座標が入る これにより
	// ひっくりかえせるかを判断する 
	// 判断したら中身は消す
	if(ChengeList.length > 0)
	{	// ひっくりかえせる石がある
		// パスはない

		// リストをクリア
		ChengeList.splice(0);			// インデックス0以降のすべての要素を削除

		return false;					// パス
	}
	else
	{	// ひっくりかえせる石がない
		return true;					// パス
	}
}
