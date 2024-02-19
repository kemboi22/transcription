import shell from 'shelljs'
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IShellOptions {
  silent: boolean
  async: boolean
}
export const whisperShell = async (command: string, options: IShellOptions) => {
  return new Promise(async (resolve, reject) => {
    try {
      // docs: https://github.com/shelljs/shelljs#execcommand--options--callback
      shell.exec(command, options, (code: number, stdout: string, stderr: string) => {
        if (code === 0) resolve(stdout)
        else reject(stderr)
      })
    } catch (error) {
      reject(error)
    }
  })
}
