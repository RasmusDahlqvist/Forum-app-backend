const app =  require('./app')
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)

const Message = require('./models/message')


//const Message = mongoose.model('Message', messageSchema)

/* 

let messages = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2020-01-10T17:30:31.098Z",
      author: 'Goku'
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2020-01-10T18:39:34.091Z",
      author: 'Vegeta'
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2020-01-10T19:20:14.298Z",
      author: 'Krillin'
    }
  ]

*/


server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})










