/*!
 * Blog JavaScript snippets
 */

function countHashtags(hashtag) {
    if (hashtag == '#javascript') {
	document.getElementById("js_counter").innerHTML += 1
    }
    if (hashtag == '#python') {
	document.getElementById("python_counter").innerHTML += 1
    }
    if (hashtag == '#github') {
	document.getElementById("git_counter").innerHTML +=1
    }
    if (hashtag == '#bash') {
	document.getElementById("bash_counter").innerHTML += 1
    }
    
}

function addHashtag(hashtag) {
    countHashtags(hashtag)
    return "<a href> "+hashtag+" </a>";
}

var weekday = new Array(7);
weekday[0] = "Sunday";
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

var newLine = '<br>';
// JavaScript
document.getElementById("blog_v2_title").innerHTML = 'Testing JavaScript <span style="float: right"> <h3 class="blog_v2_date"> 22nd December 2016</h3> </span>'
var text_v2 = document.getElementById("blog_v2");
text_v2.innerHTML = '<p>Used primarily in web development, JavaScript has been designed to allow programmatical control over the objects in its evironment.</p>';
text_v2.innerHTML += '<p> Unlike Python or R, where one can load up and run code via the command line, with JavaScript the faff of creating an HTML document to load via a browser gets a bit annoying. </p>'
text_v2.innerHTML += '<p> Fortunately, there exists an even quicker way of getting to grips with JavaScript. Just go to <a href="http://jsbin.com/hetonaxoha/edit?html,output">JSBin </a> and have a bash at running your snippets. </p>';
text_v2.innerHTML += addHashtag('#javascript');
text_v2.innerHTML += addHashtag('#R');
text_v2.innerHTML += addHashtag('#python');
text_v2.innerHTML += Array(4).join(newLine)

document.getElementById("blog_v3_title").innerHTML = 'Using bash for loops to delete off hdfs <span style="float: right"> <h3 class="blog_v2_date"> 9th January 2017</h3> </span>'
var text_v3 = document.getElementById("blog_v3");
text_v3.innerHTML = '<p>In the case of multiple deletes of HDFS, without using a wildcard search, you can use for loops of bash </p>';
text_v3.innerHTML += '<p> <c id="code">for i in {a..b}; do hadoop fs -rm -r __path__$i; done </c> </p>';
text_v3.innerHTML += '<p> The same can be done regardless of where the directories are located </p>';
text_v3.innerHTML += addHashtag('#bash');
text_v3.innerHTML += Array(4).join(newLine)

document.getElementById("blog_v4_title").innerHTML = 'Searching for strings across GitHub commits <span style="float: right"> <h3 class="blog_v4_date"> 12th January 2017 </h3> </span>'
var text_v4 = document.getElementById("blog_v4");
text_v4.innerHTML = '<p>To search for a particular string or variable among the history of code, you can use GitHubs <c id="code">git log </c> command. <p>';
text_v4.innerHTML += '<p> For example, if I want to locate the instances of the string bar across the commits of the file foo.txt: </p>';
text_v4.innerHTML += '<p> <c id="code">git log -S"bar" -- foo.txt </c> will return the list of commits in which this variable has been altered. </p>';
text_v4.innerHTML += addHashtag('#github');
text_v4.innerHTML += Array(4).join(newLine)
