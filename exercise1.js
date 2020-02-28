function getMinutes(date1, date2)
{
	//Compare to know which one is higher
	if(date1 > date2)
	{
		//Convert the miliseconds obtained by substracting date1 minus date2, then return the value (minutes)
		return (date1.getTime() - date2.getTime()) / (1000 * 60);
	}
	else
	{
		//Convert the miliseconds obtained by substracting date2 minus date1, then return the value (minutes)
		return (date2.getTime() - date1.getTime()) / (1000 * 60);
	}
}