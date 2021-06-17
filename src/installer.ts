import {exec} from '@actions/exec'

export class Installer {
  async get(): Promise<void> {
    await exec('pip', ['install', 'pipenv'])
  }
}
