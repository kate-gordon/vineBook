const express = require("express"),
    path = require("path"),
    cookieParser = require("cookie-parser"),
    logger = require("morgan"),
    es6Renderer = require("express-es6-template-engine"),
    session = require("express-session"),
    fileStore = require("session-file-store")(session);

const indexRouter = require("./routes/index"),
        masterListRouter = require("./routes/masterList"), 
        buyerRouter = require("./routes/buyerList"),
        repRouter = require("./routes/rep"); 
    

    require('dotenv').config();

const app = express();

app.engine("html", es6Renderer);
app.set("views", "./views");
app.set("view engine", "html");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
        store: fileStore(session),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        is_logged_in: false,
    })
);


app.use("/", indexRouter);
app.use("/masterList", masterListRouter);
app.use("/buyerList", buyerRouter);
app.use("/rep", repRouter); 

module.exports = app;