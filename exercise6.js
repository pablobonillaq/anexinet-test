function convertToRomanNumeral(number) 
{

	//List all the used characters of the roman numerals
	var romanSymbols = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

	//Declare the roman numeral
	var roman = '';

	//Using Object.keys with romanSymbols it can be treated as and array and be iterated
	for (var i of Object.keys(romanSymbols)) 
	{
		//Divide number by the current roman sybol value and floor to obtain the maximum integer less than or equal to the number
	    var f = Math.floor(number / romanSymbols[i]);

	    //Substract the obtained integer from the number multiplied by the value of the current roman symbol
	    number -= f * romanSymbols[i];

	    //Add as many symbols to the roman numeral as the value has the number obtained
	    roman += i.repeat(f);
	}

	//Once iterated all the symbols, return the final roman numeral
	return roman;
}