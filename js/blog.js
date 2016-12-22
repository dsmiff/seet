/*!
 * Blog JavaScript snippets
 */

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

// JavaScript
document.getElementById("blog_v2_title").innerHTML = 'Testing JavaScript <span style="float: right"> <h3 class="blog_v2_date"> 22nd December 2016</h3> </span>'
var text_v2 = document.getElementById("blog_v2");
text_v2.innerHTML = '<p>Used primarily in web development, JavaScript has been designed to allow programmatical control over the objects in its evironment</p>\n<p>fsdfsdf</p>';
text_v2.innerHTML += '<p> Unlike Python or R, where one can load up and run code via the command line, with JavaScript the faff of creating an HTML document to load via a browser gets a bit annoying. </p>'
text_v2.innerHTML += '<p> Fortunately, there exists an even quicker way of getting to grips with JavaScript. Just go to <a href="http://jsbin.com/hetonaxoha/edit?html,output">JSBin </a> and have a bash at running your snippets </p>'
