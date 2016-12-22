var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function returnDate() {
    var d = new Date();
    var n = d.getDate();
    var d1 = weekday[d.getDay()];
    var y = d.getFullYear();
    var date = [n,d1,y]
    return date.join("  ");
};

function alertWindow() {
    window.alert("Nothing yet")
};

function gitHub() {
    document.getElementById("blog_v2").innerHTML = "Aim is to easily retrieve pull requests made to the repository's base branch";
}

document.getElementById("blog_v2_title").innerHTML = 'Test Title <span style="float: right"> <h3 class="blog_v2_date"> 22nd December 2016</h3> </span>'
document.getElementById("blog_v2").innerHTML = 'Test'


