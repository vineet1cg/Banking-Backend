require('dotenv').config();
const app = require('./src/app');
const catMe = require('cat-me');
const connectDB = require('./src/db/db');

console.log(catMe());

connectDB();

app.listen(process.env.PORT || 3000,()=>{
    console.log(`Backend Running on port ${process.env.PORT || 3000} 🚀`);
});