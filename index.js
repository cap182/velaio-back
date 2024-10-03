import app from "./app.js";
import { connectDB } from "./db.js";

app.listen(3000)
connectDB();
console.log('Server', 3000)