var title = "Sheng";
$.get("./beta/exampleArticle.html", function (data) {
  var res = eval('`'+data+'`');
  $("html").html(res);
});

let x = "hello";
console.log(`${x}`);