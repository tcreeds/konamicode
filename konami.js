function konamiCode(callback)
{
    var code = [38,38,40,40,37,39,37,39,66,65];
    var codeCounter = 0;
    function checkKey(e)
    {
        if (e.keyCode == code[codeCounter])
        {
            codeCounter++;
            if (codeCounter == code.length)
            {
                callback.call();
                document.removeEventListener("keydown", checkKey);
            }
        }
        else
            codeCounter = 0;
    }
    document.addEventListener("keydown", checkKey);
}
