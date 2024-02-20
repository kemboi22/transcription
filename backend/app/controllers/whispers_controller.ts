// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { downloadModel } from '../whisper/whisper-node/download.js'
import { whisper } from '../whisper/whisper-node/index.js'
import path from 'node:path'
import { convertInputFileToWav } from '../whisper/whisper-node/convert_input_file_to_wav.js'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'
import fs from 'node:fs'
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

  async transcribe({ request }: HttpContext) {
    const audioFile = request.file('audioFile')
    if (audioFile === null) return { error: 'An error occurred' }
    const fileName = `${cuid()}`
    await audioFile.move(app.makePath('uploads'), {
      name: `${fileName}.${audioFile.extname}`,
    })
    // @ts-ignore
    let filePath = path.resolve(audioFile?.filePath)
    var outputPath = ''
    if (!filePath.endsWith('.wav')) {
      outputPath = filePath.substring(0, filePath.lastIndexOf('/') + 1) + `${fileName}.wav`
      convertInputFileToWav(filePath, outputPath)
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log('An error occurred while deleting the file', err)
        } else {
          console.log('File deleted successfully')
        }
      })
      filePath = outputPath
    }
    const transbribed = await whisper(filePath)
    return transbribed
  }
}
