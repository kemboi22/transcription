import shell from 'shelljs'

export const convertInputFileToWav = (filePath: string, outputPath: string) => {
  try {
    shell.exec(`ffmpeg -i ${filePath} -ar 16000 -ac 1 -c:a pcm_s16le ${outputPath}`)
  } catch (e) {
    console.log(e)
  }
}
