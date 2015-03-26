function Mobile(){
	this.storageCapacity="";
	this.cost="";
}

function IPhone(){
	IPhone.prototype = new Mobile();
}

function Android(){
	Android.prototype = new Mobile();
}

function display(){
	var mobileObject;
	selectedMobile = getMobile("mobile");
	if(selectedMobile == "iPhone"){
		mobileObject = new IPhone();
		mobileObject.storageCapacity = "16 GB";
		mobileObject.cost="50K";
		
	}
	else{
		mobileObject = new Android();
		mobileObject.storageCapacity = "32 GB";
		mobileObject.cost="30K";
	}
	alert("Price is :" +mobileObject.cost+". Storage is :"+mobileObject.storageCapacity+".");
}

function getMobile(string)
{
	var name = document.getElementsByName(string);
	for(i = 0 ;i<name.length;i++){
		if(name[i].checked){
			name[i].checked = false
			return name[i].value;
		}
	}		
}
