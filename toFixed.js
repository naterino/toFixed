(function() { 
	function myToFixed(value, precision) {
		var valAsString = value.toString();

		// if number is an integer, return immediately
		if(valAsString.indexOf('.') < 0) {
			valAsString = valAsString.concat('.');
			return addZeros(valAsString, precision);
		}

		var decimalIndex = valAsString.indexOf('.');
		var splitInteger = valAsString.slice(0, decimalIndex);
		var splitFractional = valAsString.slice(decimalIndex + 1); //leave out the decimal

		// make sure that there are enough zeros after the decimal
		if(splitFractional.length < precision ) {
			splitFractional = addZeros(splitFractional, precision - splitFractional.length);
		}

		valAsString = splitInteger.concat(splitFractional);

		// place decimal in correct place for rounding
		valAsString = valAsString.slice(0, decimalIndex + precision)
								 .concat('.')
								 .concat(valAsString.slice(decimalIndex + precision));

		rounded = Math.round(Number(valAsString));

		//add zero to integer section of string if value is < 0 
		if (splitInteger === '0') {
			valAsString = '0'.concat(rounded.toString());
		} else {
			valAsString = rounded.toString();
		}

		//put completed string back together
		valAsString = valAsString.slice(0, decimalIndex)
								 .concat('.')
								 .concat(valAsString.slice(decimalIndex ));

		if (valAsString.charAt(valAsString.length - 1) === '.') {
			valAsString = valAsString.substring(0, valAsString.length - 1);
		}

		return valAsString;
	}

	function addZeros(value, numberOfZeros) {
		for (var i = 0; i < numberOfZeros; i++) {
			value = value.concat('0');
		}
		return value;
	}

	window.myToFixed = myToFixed;
})();
