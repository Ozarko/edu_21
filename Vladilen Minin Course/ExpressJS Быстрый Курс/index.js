import express from 'express'
import path from 'path'
import { logger, requestTime } from "./middlewares.js";
import serverRoutes from './routes/server.js'

const __dirname = path.resolve()

const app = express();

app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, 'ejs'));

console.log(app.get("views"));

app.use(express.static(path.resolve(__dirname, "static")));
app.use(requestTime);
app.use(logger);
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(serverRoutes)

const PORT = process.env.PORT || 3000

app.get('/', (req,res) => {
  res.render('index', {title: 'Main Page', active: 'main'})
})

app.get('/features', (req,res) => {
  res.render("features", { title: "Features Page", active: 'features' });
})

app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`)
})