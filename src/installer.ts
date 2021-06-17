import {exec} from '@actions/exec'

export class Installer {
  public async get() {
    await exec('pip', ['install', 'pipenv'])
  }
}
