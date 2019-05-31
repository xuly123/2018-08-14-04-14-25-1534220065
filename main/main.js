module.exports = function main(stringInput) {
    var num=new Array();
    var st1='';//第一行显示
    var st2='';//第二行显示
	var st3='';//第三行显示
	var temp1='';
	var temp2='';
	var temp3='';
	for(i=0;i<stringInput.length;i++){
		num.push(stringInput.charAt(i));
	}
	for(i=0;i<num.length;i++){
		switch(num[i]){
			case "0":
			     temp1='._.';
				 temp2='|.|';
				 temp3='|_|';
				 break;
		    case "1":
			     temp1='...';
				 temp2='..|';
				 temp3='..|';
				 break;
			case "2":
			     temp1='._.';
				 temp2='._|';
				 temp3='|_.';
				 break;
			case "3":
				temp1='._.';
				temp2='._|';
				temp3='._|';
				break;
            case "4":
				temp1='...';
				temp2='|_|';
				temp3='..|';
				break;   
            case "5":
				temp1='._.';
				temp2='|_.';
				temp3='._|';
				break;	
			case "6":
				temp1='._.';
				temp2='|_.';
				temp3='|_|';
				break;
			case "7":
				temp1='._.';
				temp2='..|';
				temp3='..|';
				break;	
			case "8":
				temp1='._.';
				temp2='|_|';
				temp3='|_|';
				break;
			case "9":
				temp1='._.';
				temp2='|_|';
				temp3='..|';
				break;	
			default:	
		}
		if(i!=0){
			st1=st1+' '+temp1;
			st2=st2+' '+temp2;
			st3=st3+' '+temp3;
		}else{
			st1=st1+temp1;
			st2=st2+temp2;
			st3=st3+temp3;
		}
	}
	
	var st=st1+'\n'+st2+'\n'+st3+'\n';
	//console.log(st);
	return st;
	
};