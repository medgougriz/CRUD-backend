const exporess = require('express');
const app = exporess();
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(exporess.json())
const data = require('./data/data.js');
const port = 4000;
const cors = require("cors")
app.use(cors());

app.get('/api/data', (req, res) => {
    res.json(data);
});

app.post('/api/user',(req,res) =>{
  const user = req.body
  data.push(user)
  res.send('تمت العملية')
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});