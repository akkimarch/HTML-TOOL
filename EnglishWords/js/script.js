function HideOut(event){

	var target = document.querySelectorAll(".hide");
	var num=0;

	for( let i=0; i<target.length; i++)
	{  // 選択されたものを特定する
		if(target[i].id == event.target.id)
		{
			num = i;
			break;
		}
	}

	target[num].style.backgroundColor="white";
}