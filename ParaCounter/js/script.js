function Add_buttonclick(){
	var hoge = document.querySelectorAll(".Counter input");
	
	for( let i=0; i<8; i++)
	{	// 8�R���[�v
		if(hoge[i].value == -1)
		{
			hoge[i].value = 7;
			break;
		}
	}

}

function Down_buttonclick(){
	var hoge = document.querySelectorAll(".Counter input");
	
	// �l������Ƃ���́A�P���炷
	for( let i=0; i<8; i++)
	{	// 8�R���[�v
		if(hoge[i].value > 0)
		{
			hoge[i].value -= 1;
		}
	}
}

function Counter_clear(event){
	// �_�u���N���b�N������N���A

//	alert("OK"+event.target.id);
	var hoge = document.querySelectorAll(".Counter input");

	for( let i=0; i<8; i++)
	{	// 8�R���[�v
		// �_�u���N���b�N���ꂽ���̂�T���ăN���A����
		if(hoge[i].id == event.target.id)
		{
			hoge[i].value = -1;
			break;
		}
	}

}