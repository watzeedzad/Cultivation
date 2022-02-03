import React from 'react'
import './App.css'

import TopBar from './components/TopBar'

import {invoke} from '@tauri-apps/api/tauri'
import {dataDir} from '@tauri-apps/api/path'

async function startProxy() {
  await invoke('connect', { port: 2222, certificatePath: await dataDir() + '\\cultivation\\ca' })
}

async function stopProxy() {
  await invoke('disconnect')
}

async function generateCertificates() {
  await invoke('generate_ca_files', { path: await dataDir() + '\\cultivation' })
}

function none() {
  alert('none')
}

class Test extends React.Component<any, any>{
  render() {
    return (
      <div className="App">
        <TopBar optFunc={none} downFunc={none} gameFunc={none} />
        <button onClick={startProxy}>start proxy</button>
        <button onClick={stopProxy}>stop proxy</button>
        <button onClick={generateCertificates}>generate certificates</button>
      </div>
    )
  }
}

export default Test