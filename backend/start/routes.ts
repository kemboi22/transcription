/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { WebSocketServer } from 'ws'
const WhispersController = () => import('#controllers/whispers_controller')
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/whisperModels', [WhispersController, 'whisperModels'])
router.post('/downloadWhisperModels', [WhispersController, 'downloadWhisperModel'])
router.post('/transcribe', [WhispersController, 'transcribe'])

const wss = new WebSocketServer({ port: 4000 })

wss.on('connection', (ws, request) => {
  request.url
  ws.send('Finally Connected')
})
