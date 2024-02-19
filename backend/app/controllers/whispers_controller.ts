// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { downloadModel } from '../whisper/whisper-node/download.js'
import { whisper } from '../whisper/whisper-node/index.js'

export default class WhispersController {
  async whisperModels() {
    return [
      {
        Model: 'tiny',
        Disk: '75 MB',
        RAM: '~390 MB',
      },
      {
        Model: 'tiny.en',
        Disk: '75 MB',
        RAM: '~390 MB',
      },
      {
        Model: 'base',
        Disk: '142 MB',
        RAM: '~500 MB',
      },
      {
        Model: 'base.en',
        Disk: '142 MB',
        RAM: '~500 MB',
      },
      {
        Model: 'small',
        Disk: '466 MB',
        RAM: '~1.0 GB',
      },
      {
        Model: 'small.en',
        Disk: '466 MB',
        RAM: '~1.0 GB',
      },
      {
        Model: 'medium',
        Disk: '1.5 GB',
        RAM: '~2.6 GB',
      },
      {
        Model: 'medium.en',
        Disk: '1.5 GB',
        RAM: '~2.6 GB',
      },
      {
        Model: 'large-v1',
        Disk: '2.9 GB',
        RAM: '~4.7 GB',
      },
      {
        Model: 'large',
        Disk: '2.9 GB',
        RAM: '~4.7 GB',
      },
    ]
  }

  async downloadWhisperModel(http: HttpContext) {
    const body = http.request.body()
    return await downloadModel(body.model)
  }

  async transcribe() {
    const transbribed = await whisper('test1.wav')
    return transbribed
  }
}
