function Add_buttonclick(){
	var hoge = document.querySelectorAll(".Counter input");
	
	for( let i=0; i<8; i++)
	{	// 8コループ
		if(hoge[i].value == -1)
		{
			hoge[i].value = 7;
			break;
		}
	}

}

function Down_buttonclick(){
	var hoge = document.querySelectorAll(".Counter input");
	
	// 値があるところは、１つ減らす
	for( let i=0; i<8; i++)
	{	// 8コループ
		if(hoge[i].value > 0)
		{
			hoge[i].value -= 1;
		}
	}
}

function Counter_clear(event){
	// ダブルクリックしたらクリア

//	alert("OK"+event.target.id);
	var hoge = document.querySelectorAll(".Counter input");

	for( let i=0; i<8; i++)
	{	// 8コループ
		// ダブルクリックされたものを探してクリアする
		if(hoge[i].id == event.target.id)
		{
			hoge[i].value = -1;
			break;
		}
	}

}