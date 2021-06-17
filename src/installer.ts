import {exec} from '@actions/exec'

export class Installer {
  async get(version: string): Promise<void> {
    await exec('pip', ['install', `pipenv==${version}`])
  }
}
