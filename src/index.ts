import  express from 'express'
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

const db = {
  users: [
    {id: 1 , title: "loqwel"},
    {id: 2 , title: "lama"},
    {id: 3 , title: "Clala"},
    {id: 4 , title: "Mama"},
  ]
}

app.get('/', (req, res) => {
  

  res.send("нормально все")
})

app.get('/users', (req, res) => {
  

  res.json(db.users)
})

app.get('/users/:id', (req, res) => {
  
  const data = db.users.find(c => c.id === +req.params.id)

  res.json(data)
})

app.delete('/users/:id', (req, res) => {
  
   db.users = db.users.filter(c => c.id !== +req.params.id)

  res.sendStatus(201)
})

app.post('/users', (req, res) => {
  
  const item = {
    id: +(new Date()),
    title: req.body.title
  }

  db.users.push(item)

 res.json(item)
})

app.put('/users/:id', (req, res) => {
  
  const data = db.users.find(c => c.id === +req.params.id)
  
     if( data && req.body.title ){
      data.title = req.body.title
      res.sendStatus(201)
     }else {
      res.sendStatus(403)
     }
  
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


