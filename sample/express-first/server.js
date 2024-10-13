// console.log("Hello nodejs!");

const express = require("express");
const app = express();
const PORT = 3000;

// ルーティングの設定
const userRouter = require("./routes/user");

// ミドルウェアの設定
app.use(mylogger);

// publicフォルダにあるHTMLファイルをよみこむ
// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("Hello express!");
  // res.send("<h1>Hello express!</h1>");
  // res.send("Yaaaay! Express is running!");
  // res.sendStatus(400);
  // res.status(500).send("error is occured");
  res.render("index", { text: "Express" });
});

// ルーティングの指定
app.use("/user", userRouter);
// app.use("/auth", authRouter);
// app.use("/customer", customerRouter);
// app.use("/product", productRouter);

// ミドルウェアを定義
function mylogger (req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(PORT, () => console.log("Server is running on port " + PORT));
