function dataTypeCheck(a) {
     if (a === +a && a % 1 === 0 ) {
	 	alert("its an integer"); 
        return (a / 2);
	} else if (a === +a && a % 1 !== 0 ) {
    	alert("its a float");
        return a * 2;
    } else if (typeof a === "string" && isNaN(Number(a)) === false) {
    	alert("its a string");
        return Number(a);
        
    } else if (typeof a === "string") {
    	alert("Any other string");
    	var abc= "hello "+a;
    	alert(abc) ;
        return "hello " + a;
    } else if (typeof a !== "string" && isNaN(a) === true) {
    	alert("Nan");
        return 0;
    } else if (a === null) {
    	alert("Null");
        return 0;
    } else if (a === undefined) {
    	alert("undefined");
        return false;
    }
