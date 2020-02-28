function toBinary(number) 
{
    //If number does not meet the criteria will return ERROR
    if (number >= 1 || number <= 0) 
        return "ERROR"; 
    
    //Prepare the final string
    var binaryString = "0.";

    //This will multiply number many times as necessary
    while (number > 0) 
    {   
        //If binary number does not meet the criteria to be shorter than 32 characters it will return ERROR
        if (binaryString.length >= 32)
        {
            return "ERROR"; 
        }

        //Multiply the number by 2
        var b = number * 2;

        //If result (b) is higher than 1, it pushes "1" to the binary string. 
        if (b >= 1) 
        {
            binaryString += "1";
            //Substract 1 to the result and assign the result to the "number" variable
            number = b - 1; 
        } 
        else
        {
            //If result (b) is lower than 1, it pushes "0" to the binary string.  
            binaryString += "0";

            //It doesn´t substract, just assing the result to the "number" variable
            number = b; 
        } 
    }

    //Print the result 
    console.log(binaryString); 
}