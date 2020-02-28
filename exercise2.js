function numbersInOddPosition(array)
{
	//Declare the array of the numbers in oddPositions
	var oddPositionsNumbers = new Array();

	//Iterate the original array
	array.forEach(function(element, index)
	{
		//Residue will help to know if is an odd position of the array or not
		if(index % 2 != 0)
		{
			//Push element in odd position to the oddPositionNumbers array
			oddPositionsNumbers.push(element);
		}
	});

	return oddPositionsNumbers;
}