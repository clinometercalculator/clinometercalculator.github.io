function calculateHeight()
{
    dheight = document.getElementById("dheight").value;
    distance = document.getElementById("distance").value;
    aoe = document.getElementById("aoe").value;
    height = (Number(distance) * Math.tan((Number(aoe) * Math.PI)/180)) + dheight;
    nheight = Number(height) + Number(dheight);
    let feet = 0;
    while (nheight >= 12)
    {
        nheight -= 12
        feet += 1
    }
    finalheight = Math.round((Number(nheight) + Number.EPSILON) * 10) / 10
    if (Number(feet) > 9)
    {
        marginerrorlow = (Number(height) + Number(dheight)) * 0.01;
        marginerrorlow = Math.round((Number(marginerrorlow) + Number.EPSILON) * 10) / 10;
        marginerrorhigh = (Number(height) + Number(dheight)) * 0.05;
        marginerrorhigh = Math.round((Number(marginerrorhigh) + Number.EPSILON) * 10) / 10;
    } else {
        marginerrorlow = (Number(height) + Number(dheight)) * 0.01;
        marginerrorlow = Math.round((Number(marginerrorlow) + Number.EPSILON) * 10) / 10;
        marginerrorhigh = (Number(height) + Number(dheight)) * 0.05;
        marginerrorhigh = Math.round((Number(marginerrorhigh) + Number.EPSILON) * 10) / 10;
    }
    document.getElementById("solution").innerHTML = "Height: " + feet + " feet and " + finalheight + " inches <br>";
    lowheight = Number(finalheight) + Number(marginerrorlow);
    highheight = Number(finalheight) + Number(marginerrorhigh);
    if (Number(lowheight) > 12)
    {
        feet += 1;
        lowheight = Number(lowheight) - 12;
    }
    if (Number(highheight) > 12)
        {
            feet += 1;
            highheight = Number(highheight) - 12;
        }
    document.getElementById("solution").innerHTML += "Estimated height using margin of error: " + feet + " feet and " + lowheight + " inches to " + feet + " feet and " + highheight + " inches.";
}
