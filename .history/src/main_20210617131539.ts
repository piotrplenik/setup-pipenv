import * as core from '@actions/core'
import {Installer} from './installer'

async function run(): Promise<void> {
  try {
    const version: string = core.getInput('pipenv-version')
    core.debug(`Installing Pipenv version: ${version} ...`)

    const installer = new Installer()
    await installer.get(version)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
