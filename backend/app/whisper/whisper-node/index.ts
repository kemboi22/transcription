import path from 'node:path'
// @ts-ignore
import { IShellOptions } from './shell'
import { createCppCommand, IFlagTypes } from './whisper.ts'
import { parseTranscript } from './tsToArray.ts'
import shell from 'shelljs'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IOptions {
  modelName?: string // name of model stored in node_modules/whisper-node/lib/whisper.cpp/models
  modelPath?: string // custom path for model
  whisperOptions?: IFlagTypes
  shellOptions?: IShellOptions
}

// returns array[]: {start, end, speech}
export const whisper = async (
  filePath: string,
  options?: IOptions
): Promise<
  | {
      speech: string
      start: string
      end: string
    }[]
  | undefined
> => {
  try {
    console.log('[whisper-node] Transcribing:', filePath, '\n')

    // 1. create command string for whisper.cpp
    const command = createCppCommand({
      filePath: path.normalize(`"${filePath}"`),
      modelName: 'base.en',
      modelPath: options?.modelPath ? `"${options?.modelPath}"` : undefined,
      options: options?.whisperOptions,
    })
    console.log(command)
    // shell.cd('app/whisper/whisper.cpp')

    // 2. run command in whisper.cpp directory
    // todo: add return for continually updated progress value
    const transcript = shell.exec(command, options?.shellOptions)

    // 3. parse whisper response string into array
    return await parseTranscript(transcript)
  } catch (error) {
    console.log('[whisper-node] Problem:', error)
  }
}
