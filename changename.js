var fs = require("fs");
var path = require("path");
console.log("OK");
var changes = [
  {old: "1.png", newName: "ban-ghe-cafe-fansipan-patio.png"},
  {old: "2.png", newName: "ban-ghe-ngoai-troi-fansipan-patio.png"},
  {old: "3.png", newName: "ban-ghe-nha-hang-fansipan-patio.png"},
  {old: "ban_kite.jpg", newName: "ban-ghe-cafe-fansipan-kite.jpg"},
  {old: "cata_1.jpg", newName: "ban-ghe-ngoai-that-fansipan-patio.jpg"},
  {old: "cata1.jpg", newName: "ban-ghe-go-fansipan-patio.jpg"},
  {old: "cata2.jpg", newName: "ban-ghe-go-cafe-fansipan-patio.jpg"},
  {old: "cata3.jpg", newName: "ban-ghe-go-cafe-fansipan.jpg"},
  {old: "cata4.jpg", newName: "ban-ghe-cafe-fansipan.jpg"},
  {old: "cata5.jpg", newName: "ban-ghe-cafe-ngoai-troi-fansipan-patio.jpg"},
  {old: "cata6.jpg", newName: "ban-ghe-go-ngoai-troi-fansipan.jpg"},
  {old: "cata7.jpg", newName: "ban-ghe-go-ngoaithat-fansipan.jpg"},
  {old: "cata8.jpg", newName: "ban-ghe-go-cafe.jpg"},
  {old: "cata9.jpg", newName: "ban-ghe-go-ngoai-troi.jpg"},
  {old: "cata10.jpg", newName: "ban-ghe-ngoai-troi.jpg"},
  {old: "Den_cheo.png", newName: "ban-cafe-go-fansipan.png"},
  {old: "Den_thang.png", newName: "ban-cafe-go-cafe.jpg"},
  {old: "ghe_kite.jpg", newName: "ban-ghe-ngoai-troi-fansipan-kite.jpg"},
  {old: "kite_design_1.jpg", newName: "ghe-cafe-kite-fansipan.png"},
  {old: "kite_slide.jpg", newName: "ban-cafe-go-cafe-fansipan-kite.jpg"},
  {old: "logo.png", newName: "fansipan-logo.png"},
  {old: "plain_logo.png", newName: "fansipan-hinh-anh.png"},
  {old: "slide_1.png", newName: "ban-ghe-go-nha-hang.png"},
  {old: "timi_1.png", newName: "ban-ghe-nha-hang-fansipan.png"},
  {old: "timi_2.png", newName: "ban-ghe-go-quan-an.png"},
  {old: "tinhte_1.png", newName: "ghe-cafe-fansipan.png"},
  {old: "tinhte_2.png", newName: "ghe-cua-hang-cafe-fansipan.png"},
  {old: "top_right.png", newName: "fansipan-logo-markup.png"},
  {old: "hiendai.png", newName: "fansipan-patio-ban-ghe-ngoai-troi.png"},
  {old: "contact_us.png", newName: "lien-he-ban-ghe-ngoai-troi-fansipan.png"},
]
function readAndReplace(){
  fs.readdir(path.join(__dirname, "views"), function(err, files){
    files.forEach(function(f){
        var data = fs.readFileSync(path.join(__dirname, "views/" + f), "utf-8");
        data = replaceString(data, changes, 0);
        fs.writeFile(path.join(__dirname, "newviews/" + f), data, function(err){
          if(err) throw err;
          console.log("saved: " + f);
        });
  });
});
}
readAndReplace();
function replaceString(fullS, pairs, indx) {
  if(indx === pairs.length){
    return fullS;
  }
  fullS = fullS.split("images/" + pairs[indx].old).join("images/" + pairs[indx].newName);
  indx++;
  return replaceString(fullS, pairs, indx);
}
// fs.readFile(path.join(__dirname, "views/" + "ban-ghe-patio.ejs"), "utf-8", function(err,data){
//   console.log(replaceString(data, changes, 0));
// });
function util(add, f, newName){
  fs.renameSync(add + f, add + "ban-ghe-cafe-fansipan-patio.png");
  readAndReplace("images/" + f, "images/" + "ban-ghe-cafe-fansipan-patio.png");
}
fs.readdir(path.join(__dirname, "public/images"), function(err, files){
  var add = path.join(__dirname, "public/images/");
  if(err) {
    console.log(err);
    return;
  }
  files.forEach(function(f){
    changes.forEach(function(pair){
      if ( f == pair.old){
        fs.renameSync(path.join(__dirname, "public/images/" + f), path.join(__dirname, "public/images/" + pair.newName));
      }
    });
  });
});
