
// 1�`10�̃{�^��
function Number_buttonclick(event){
	// ���������̃{�^�������f

	var hoge = document.querySelectorAll(".ToolBody button");
	var num = 0;					// ���Z���鐔�l

	for( let i=0; i<10; i++)
	{   // 10�R���[�v
		// �����ꂽ�{�^�����ǂꂩ�݂���
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

	// ���ݒl�̐�����ς���
	var genzaiti = document.getElementById("CurrentValue");
	genzaiti.textContent = Number(genzaiti.textContent) + num;
}

// ���ړ��� OK�{�^��
function buttonDirect(){

	// ���͒l�̎�荞��
	var input = document.getElementById("DirectInput");

	// ���ݒl�̐�����ς���
	var genzaiti = document.getElementById("CurrentValue");
	genzaiti.textContent = Number(genzaiti.textContent) + Number(input.value);
}

// �^�[���I���{�^��
function End_buttonclick(){
	// �v�Z���ĕ\���X�V����

	// ���݂̃^�[�����擾
	var genzaiTern = document.getElementById("CurrentTern");

	// �R�X�g- ����l���擾
	var genzaiti = document.getElementById("CurrentValue");



	// �\�X�V
	switch(genzaiTern.textContent)
	{
		case "10":
			var tern10 = document.getElementById("Tern10");
			tern10.textContent = Number(tern10.textContent)-Number(genzaiti.textContent);
			/* ̫�ٽٰ */
		case "9":
			var tern9 = document.getElementById("Tern9");
			tern9.textContent = Number(tern9.textContent)-Number(genzaiti.textContent);
			/* ̫�ٽٰ */
		case "8":
			var tern8 = document.getElementById("Tern8");
			tern8.textContent = Number(tern8.textContent)-Number(genzaiti.textContent);
			/* ̫�ٽٰ */
		case "7":
			var tern7 = document.getElementById("Tern7");
			tern7.textContent = Number(tern7.textContent)-Number(genzaiti.textContent);
			/* ̫�ٽٰ */
		case "6":
			var tern6 = document.getElementById("Tern6");
			tern6.textContent = Number(tern6.textContent)-Number(genzaiti.textContent);
			/* ̫�ٽٰ */
		case "5":
			var tern5 = document.getElementById("Tern5");
			tern5.textContent = Number(tern5.textContent)-Number(genzaiti.textContent);
			/* ̫�ٽٰ */
		case "4":
			var tern4 = document.getElementById("Tern4");
			tern4.textContent = Number(tern4.textContent)-Number(genzaiti.textContent);
			/* ̫�ٽٰ */
		case "3":
			var tern3 = document.getElementById("Tern3");
			tern3.textContent = Number(tern3.textContent)-Number(genzaiti.textContent);
			/* ̫�ٽٰ */
		case "2":
			var tern2 = document.getElementById("Tern2");
			tern2.textContent = Number(tern2.textContent)-Number(genzaiti.textContent);
			/* ̫�ٽٰ */
		case "1":
			var tern1 = document.getElementById("Tern1");
			tern1.textContent = Number(tern1.textContent)-Number(genzaiti.textContent);
			break;
	}

	// �^�[�����X�V
	genzaiTern.textContent = Number(genzaiTern.textContent)+1;

	// ���ݒl��0�Ƀ��Z�b�g
	genzaiti.textContent = 0;

	//// �\�̊Y���ʒu�̐F��ς���
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