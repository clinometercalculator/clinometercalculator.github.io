function calculateHeight()
{
    dheight = document.getElementById("dheight").value;
    distance = document.getElementById("distance").value;
    aoe = document.getElementById("aoe").value;
    height = (Number(distance) * Math.tan((Number(aoe) * Math.PI)/180)) + dheight;
    let feet = 0;
    while (height >= 12)
    {
        height -= 12
        feet += 1
    }
    finalheight = Math.round((Number(height) + Number.EPSILON) * 10) / 10
    document.getElementById("solution").innerHTML = "Height: " + feet + " feet and " + finalheight + " inches";
}