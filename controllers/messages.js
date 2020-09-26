const messagesRouter = require('express').Router()
const Message = require('../models/message')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        return authorization.substring(7)
    } 
    return null
}
  
  messagesRouter.get('/', async (request, response) => {
     const messages = await Message.find({}).populate('user', {username: 1})
     response.json(messages.map(message => message.toJSON()))
         
      });
    
  
  messagesRouter.get('/:id', async (request, response) => {
      const message = await Message.findById(request.params.id)
  
      if(message) {
          response.json(message)
      } else {
          response.status(404).end()
      }
  
  })
  
  messagesRouter.delete('/:id', async (request, response) => {
     await Message.findByIdAndRemove(request.params.id)
     response.status(204).end()
  })
  
  messagesRouter.post('/', async (request, response) => {
     const body = request.body
     const token = getTokenFrom(request)
     const decodedToken = jwt.verify(token, process.env.SECRET)
     if(!token || !decodedToken.id) {
         return response.status(401).json({ error: 'token missing or invalid' })
     }
     const user = await User.findById(decodedToken.id)
  
     const message = new Message({
         content: body.content,
         date: new Date(),
         user: user._id
         
     })

  
    const savedMessage = await message.save()
    user.messages = user.messages.concat(savedMessage._id)
    await user.save()

    response.json(savedMessage.toJSON())
  })
  
  module.exports = messagesRouter