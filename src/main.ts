import * as core from '@actions/core'
import {Installer} from './installer'

async function run(): Promise<void> {
  try {
    const installer = new Installer()
    await installer.get()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
