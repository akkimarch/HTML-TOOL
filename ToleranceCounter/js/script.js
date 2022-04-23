
// 1～10のボタン
function Number_buttonclick(event){
	// 自分が何のボタンか判断

	var hoge = document.querySelectorAll(".ToolBody button");
	var num = 0;					// 加算する数値

	for( let i=0; i<10; i++)
	{   // 10コループ
		// 押されたボタンがどれかみつける
		switch(event.target.id)
		{
			case "button1":
				num=1;
				break;
			case "button2":
				num=2;
				break;
			case "button3":
				num=3;
				break;
			case "button4":
				num=4;
				break;
			case "button5":
				num=5;
				break;
			case "button6":
				num=6;
				break;
			case "button7":
				num=7;
				break;
			case "button8":
				num=8;
				break;
			case "button9":
				num=9;
				break;
			case "button10":
				num=10;
				break;
		}
	}

	// 現在値の数字を変える
	var genzaiti = document.getElementById("CurrentValue");
	genzaiti.textContent = Number(genzaiti.textContent) + num;
}

// 直接入力 OKボタン
function buttonDirect(){

	// 入力値の取り込み
	var input = document.getElementById("DirectInput");

	// 現在値の数字を変える
	var genzaiti = document.getElementById("CurrentValue");
	genzaiti.textContent = Number(genzaiti.textContent) + Number(input.value);
}

// ターン終了ボタン
function End_buttonclick(){
	// 計算して表を更新する

	// 現在のターン数取得
	var genzaiTern = document.getElementById("CurrentTern");

	// コスト- する値を取得
	var genzaiti = document.getElementById("CurrentValue");



	// 表更新
	switch(genzaiTern.textContent)
	{
		case "10":
			var tern10 = document.getElementById("Tern10");
			tern10.textContent = Number(tern10.textContent)-Number(genzaiti.textContent);
			/* ﾌｫｰﾙｽﾙｰ */
		case "9":
			var tern9 = document.getElementById("Tern9");
			tern9.textContent = Number(tern9.textContent)-Number(genzaiti.textContent);
			/* ﾌｫｰﾙｽﾙｰ */
		case "8":
			var tern8 = document.getElementById("Tern8");
			tern8.textContent = Number(tern8.textContent)-Number(genzaiti.textContent);
			/* ﾌｫｰﾙｽﾙｰ */
		case "7":
			var tern7 = document.getElementById("Tern7");
			tern7.textContent = Number(tern7.textContent)-Number(genzaiti.textContent);
			/* ﾌｫｰﾙｽﾙｰ */
		case "6":
			var tern6 = document.getElementById("Tern6");
			tern6.textContent = Number(tern6.textContent)-Number(genzaiti.textContent);
			/* ﾌｫｰﾙｽﾙｰ */
		case "5":
			var tern5 = document.getElementById("Tern5");
			tern5.textContent = Number(tern5.textContent)-Number(genzaiti.textContent);
			/* ﾌｫｰﾙｽﾙｰ */
		case "4":
			var tern4 = document.getElementById("Tern4");
			tern4.textContent = Number(tern4.textContent)-Number(genzaiti.textContent);
			/* ﾌｫｰﾙｽﾙｰ */
		case "3":
			var tern3 = document.getElementById("Tern3");
			tern3.textContent = Number(tern3.textContent)-Number(genzaiti.textContent);
			/* ﾌｫｰﾙｽﾙｰ */
		case "2":
			var tern2 = document.getElementById("Tern2");
			tern2.textContent = Number(tern2.textContent)-Number(genzaiti.textContent);
			/* ﾌｫｰﾙｽﾙｰ */
		case "1":
			var tern1 = document.getElementById("Tern1");
			tern1.textContent = Number(tern1.textContent)-Number(genzaiti.textContent);
			break;
	}

	// ターン数更新
	genzaiTern.textContent = Number(genzaiTern.textContent)+1;

	// 現在値を0にリセット
	genzaiti.textContent = 0;

	//// 表の該当位置の色を変える
	//switch(genzaiTern.textContent)
	//{
	//	case "1":
	//		var __tern1 = document.getElementById("Tern1");
	//		__tern1.style.backgroundcolor = "white";
	//	case "2":
	//		var __tern2 = document.getElementById("Tern2");
	//		__tern2.style.backgroundcolor = "white";
	//	case "3":
	//		var __tern3 = document.getElementById("Tern3");
	//		__tern3.backgroundcolor = "white";
	//	case "4":
	//		var __tern4 = document.getElementById("Tern4");
	//		__tern4.backgroundcolor = "white";
	//	case "5":
	//		var __tern5 = document.getElementById("Tern5");
	//		__tern5.backgroundcolor = "white";
	//	case "6":
	//		var __tern6 = document.getElementById("Tern6");
	//		__tern6.backgroundcolor = "white";
	//	case "7":
	//		var __tern7 = document.getElementById("Tern7");
	//		__tern7.backgroundcolor = "white";
	//	case "8":
	//		var __tern8 = document.getElementById("Tern8");
	//		__tern8.backgroundcolor = "white";
	//	case "9":
	//		var __tern9 = document.getElementById("Tern9");
	//		__tern9.backgroundcolor = "white";
	//	case "10":
	//		var __tern10 = document.getElementById("Tern10");
	//		__tern10.backgroundcolor = "white";
	//}


}