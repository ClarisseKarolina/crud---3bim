import express from "express" 
import routes from "./src/routes"

const app = express();

app.use(express.json());
app.use(routes)

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000');
});