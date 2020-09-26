/* 
const mongoose = require('mongoose')


const password = 'flN5zHJJN0Hoqr2X'

const url =
  `mongodb+srv://Rasmus:${password}@cluster0.l7bnq.mongodb.net/<dbname>?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const messageSchema = new mongoose.Schema({
  content: String,
  date: Date,
  author: String,
})

const Message = mongoose.model('Message', messageSchema)

const message = new Message({
  content: 'Kamehame haa',
  date: new Date(),
  author: 'Gohan',
})

message.save().then(response => {
  console.log('message saved!')
  mongoose.connection.close()
})

*/