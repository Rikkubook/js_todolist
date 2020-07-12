var gulp = require("gulp");
var sass = require("gulp-sass");

var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

var autoprefixer = require("gulp-autoprefixer");

var babel = require("gulp-babel");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps"); //壓縮

// sass 編譯函式
gulp.task("sass", function() {
  return gulp
    .src("source/sass/*.scss") //來源目錄
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError)) //經由sass 轉譯
    .pipe(
      autoprefixer({
        cascade: true //是否美化屬性值排列方式
      })
    )
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest("source/css")); //目的地目錄
});

//ES6--自己的 babel
gulp.task("babel", () =>
  gulp
    .src("./source/js/**/**/*.js")
    .pipe(sourcemaps.init()) //開起找來源
    .pipe(
      babel({
        presets: ["@babel/env"] //編譯檔案
      })
    )
    .pipe(concat("all.js")) //合併成同一隻檔案
    .pipe(sourcemaps.write(".")) //寫來源
    .pipe(gulp.dest("./source/js"))
);

gulp.task("default", ["sass"], function() {
  browserSync.init({
    port: 3001,
    server: {
      //根目錄不變與node同層
      baseDir: "source/",
      index: "todolist.html" //因為會影響到連結結構 除非html主頁抓至source下第一層
      //請手動在3000port後輸入visual/index.html
    }
  });

  gulp.watch("source/sass/**/*.scss", ["sass"]).on("change", reload);
  gulp.watch("source/**/*.html").on("change", reload);
  gulp.watch("source/js/**/*.js").on("change", reload);
  gulp.watch("source/img/**/*").on("change", reload);
});
