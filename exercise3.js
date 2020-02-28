function printStrings(strings)
{
	//Variable with the final rectangular frame
	var toPrint = "";

	//Variable with the longest string of the list
	var longestString = "";

	//Iterate the list of strings
	strings.forEach(function(element){

		//This if sentence will help to know the longest string in the list
		if(element.length > longestString.length)
		{
			longestString = element;
		}
	});

	//Prepare the first line of the frame. It will have four asterisks longer than the longest string length
	toPrint += '*'.repeat(longestString.length + 4);

	//Add the new line escape character
	toPrint += '\n';

	//Iterate the string list
	for(let i = 0; i < strings.length; i++)
	{
		//Validate if current string of the list is not the longest string of the list
		if(strings[i].length < longestString.length)
		{
			//Calculate the difference between the longest string and the current string.
			let dif = longestString.length - strings[i].length;

			//Create a string with the total of spaces
			let spaces = ' '.repeat(dif);

			//Concatenate the result string (to print the final frame) with the necessary spaces, asterisks and the new line escape character
			toPrint += '* ' + strings[i] + spaces + ' *\n';
		}
		else
		{
			//If the current string is the longest string it will just add two asterisks, two spaces and the new line escape character
			toPrint += '* ' + strings[i] + ' *\n';
		}
	}

	//Add the final line of the frame. It will have four asterisks longer than the longest string length
	toPrint += '*'.repeat(longestString.length + 4);

	console.log(toPrint);
}