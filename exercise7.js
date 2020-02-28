function parenthesisPairs(n) {

    if (n == 0)
        return [""];

    var parenthesis = [];
    for (var i = 0; i < n; i++) 
    {

        var lefts = parenthesisPairs(i);
        var rights = parenthesisPairs(n - i - 1);

        for (var l = 0; l < lefts.length; l++)
            for (var r = 0; r < rights.length; r++)
                parenthesis.push("(" + lefts[l] + ")" + rights[r]);
    }

    return parenthesis;
}

console.log(parenthesisPairs(3));