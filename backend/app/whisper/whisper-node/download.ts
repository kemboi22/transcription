// Javascript layer for using the whisper.cpp built-in model downloader scripts

import shell from 'shelljs'
import { DEFAULT_MODEL, MODELS_PATH } from './constants.ts'
export const downloadModel = async (model: string) => {
  try {
    shell.cd(MODELS_PATH)
    if (!shell.which('./download-ggml-model.sh')) {
      throw 'Download is not being run from the correct path'
    }

    let scriptPath = './download-ggml-model.sh'
    if (process.platform === 'win32') scriptPath = './download-ggml-model.cmd'
    let modelName = model === '' ? DEFAULT_MODEL : model
    shell.exec(`${scriptPath} ${modelName}`)
    console.log('[whisper-node] Attempting to compile model...')
    shell.cd('../')
    shell.exec('make')
  } catch (e) {
    return e
  }
}
