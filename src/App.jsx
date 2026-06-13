import { useState } from 'react'
import './App.css'

function App() {
  const names = [
    'Glaucous',
    'Fulvous',
    'Smalt Blue',
    'Gamboge',
    'Coquelicot',
    'Zaffre',
    'Isabelline',
    'Aureolin',
    'Caput Mortuum',
    'Verdigris',
    'Bole',
    'Greige',
    'Falu Red',
    'Mikado Yellow',
    'Amaranthine',
    'Wenge',
    'Celadon',
    'Puce',
    'Keppel',
    'Byzantium',
  ]
  const colors = [
    '#6082B6',
    '#E48400',
    '#51808F',
    '#E49B0F',
    '#FF3300',
    '#0014A8',  
    '#F4F0EC',
    '#FDEE00',
    '#592720',
    '#5D5E37',
    '#79443B',
    '#CCC3B9',
    '#801818',
    '#FFC40C',
    '#E52B50',
    '#645452',
    '#C3E0C6',
    '#C3E0C6',
    '#43B3A3',
    '#702963',
  ]
  
  const start = Math.floor(Math.random()*20)
  const [name, setName] = useState(names[start])
  const [color, setColor] = useState(colors[start])

  return (
    <div className="App">
      <h1>Overly Specific Color Names</h1>
      <h2>Try memorizing these obscure colors!</h2>
      
    </div>
  )
}

export default App
