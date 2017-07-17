
charArr = ["dany", "tyr", "jon"];

function toggleVisibility(id) {
    var e = document.getElementById(id);

    if (e.style.display === 'block') {
        e.style.display = 'none';
    } else {
        charArr.forEach(function (elem) {
            console.log(elem);
            if (document.getElementById(elem).style.display !== "none") {
                document.getElementById(elem).style.display = 'none';
            }
            e.style.display = 'block';
        }, this);
    }
}