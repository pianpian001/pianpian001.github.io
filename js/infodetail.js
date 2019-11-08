(function(win, $) {
	var viewGuid=$("#viewGuid").attr("value1");
	var s=viewGuid.substring(0,3);
	switch(s)
		{
		case "001":
			$("#001").addClass('current');
		  break;
		case "002":
			$("#002").addClass('current');
		  break;
		case "003":
			$("#003").addClass('current');
			break;
		case "004":
			$("#004").addClass('current');
			break;
		case "005":
			$("#005").addClass('current');
			break;
		case "006":
			$("#006").addClass('current');
			break;	
		case "007":
			$("#007").addClass('current');
			break;
			default:
		 
		}
		
		

	
	
})(this,jQuery);
