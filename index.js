const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const data = require("./data");
const IndexRouter = require('./routes/indexRouter');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// app
//   .get("/", (req, res) => {
//     const contacts = data.map((d) => `${d.name} - ${d.phone}`);

//     res.render("all.handlebars", { contacts });
//   })
//   .get("/Add", (req, res) => {
//     const contacts = data.map((d) => `${d.name} - ${d.phone}`);

//     res.render("add.handlebars", { contacts, isContactsBlocked: true });
//   })
//   .get("/Update", (req, res) => {
//     const name = req.query.name;
//     const phone = req.query.phone;

//     const contacts = data.map((d) => `${d.name} - ${d.phone}`);

//     res.render("update.handlebars", {
//       contacts,
//       isContactsBlocked: true,
//       name,
//       phone,
//     });
//   });

// app
//   .post("/Add", (req, res) => {
//     const name = req.body.name;
//     const phone = req.body.phone;

//     data.push({ name, phone });

//     const contacts = data.map((d) => `${d.name} - ${d.phone}`);

//     res.json({ contacts });
//   })
//   .post("/Update", (req, res) => {
//     const name = req.body.name;
//     const phone = req.body.phone;

//     const index = data.findIndex((contact) => contact.phone === phone);

//     if (index !== -1) data[index].name = name;

//     const contacts = data.map((d) => `${d.name} - ${d.phone}`);

//     res.json({ contacts });
//   })
//   .post("/Delete", (req, res) => {
//     const phone = req.body.phone;

//     const index = data.findIndex((contact) => contact.phone === phone);

//     if (index !== -1) data.splice(index, 1);

//     const contacts = data.map((d) => `${d.name} - ${d.phone}`);

//     res.json({ contacts });
//   });

app.use('/', IndexRouter);
app.use('/Add', IndexRouter);
app.use('/Update', IndexRouter);
app.use('/Delete', IndexRouter);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  
