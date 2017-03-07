<<<<<<< HEAD
var title = "Sheng";
$.get("./beta/exampleArticle.html", function (data) {
  var res = eval('`'+data+'`');
  $("html").html(res);
});

let x = "hello";
console.log(`${x}`);
=======
/*
In order to add a fill-in field to the example article;
  1. Add the interpolation target to the html document (E.g ${name})
  2. Create LET with same (case sensitive) name (E.g const name = "Article Name")
  3. Add field to configuration page, or add in any other method to dynamically create page data


 */
let title = "Drivetrain Move mm";
let articleType = "Method";
let description = "This method allows for prescision movement with the wallaby. This method moves the robot a set amount of millimeters, passed as an argument";
let usage = "public void drive_train_move_mm(int millimetersToMove)";
let example = "drive_train_move_mm(400)";

function run() {
    $.get("./beta/exampleArticle.html", function (data) {
        let res = eval('`'+data+'`');
        $("html").html(res);
    });
}
>>>>>>> 262e52c4b49117322bf32deb58f46feffe37482d
