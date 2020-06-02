const express = require("express");
const path = require("path");
const compression = require("compression");
const cors = require("cors");
const enforce = require("express-sslify");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

// tempo
const snitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss-clean");
const helmet = require("helmet");

// init app
const app = express();
app.enable("trust proxy");

// const corsOptions = { origin: "https://" };
// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));
app.use(cors());
app.options("*", cors());

app.use(helmet());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// limiters
const limiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in a hour.",
});
app.use("/api", limiter);
app.use(express.json({ limit: "10kb" }));

// parsers
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// protection
app.use(snitize());
app.use(xss());
app.use(hpp({ whitelist: [] }));

// observer
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // CONSOLE LOG BODY ON EACH REQUEST - temporary
  if (process.env.NODE_ENV === "development")
    console.log(req.body, req.requestTime);
  next();
});

// routing
// app.use("/api/v1/chat", chatRouter);

if (process.env.NODE_ENV === "production") {
  // compress all response bodies
  app.use(compression());

  // enforce https whenever http are made
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // serving static files
  app.use(
    express.static(path.join(__dirname, "client/build"), {
      etag: true,
      lastModified: true,
      setHeaders: (res, path) => {
        const hashRegExp = new RegExp("\\.[0-9a-f]{8}\\.");
        if (path.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-cache");
        } else if (hashRegExp.test(path)) {
          res.setHeader("Cache-Control", "max-age=31536000");
        } else if (
          path.endsWith(".ico") ||
          path.endsWith(".png") ||
          path.endsWith(".jpg") ||
          path.endsWith(".jpeg")
        ) {
          res.setHeader("Cache-Control", "max-age=31536000");
        }
      },
    })
  );

  // on request to any route that is not covered - send index html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// run service worker on request
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

module.exports = app;
