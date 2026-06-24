import { useState } from 'react'
import './App.css'
import Card from './components/Card'


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
  ];
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
    '#53322E',
    '#43B3A3',
    '#702963',
  ];
  
  const [color, setColor] = useState(0);

  const[prev, checkPrev] = useState('more')
  const[next, checkNext] = useState('more')
  const[input, checkInput] = useState('more')
  const[answer, setAnswer] = useState('')

  const nextColor = () =>{
    checkInput('')
    checkNext('more')
    checkPrev('more')
    if (color < 19) {
      setColor(color+1);
    }
    else{
      checkNext('none')
    }
  };

  const prevColor = () =>{
    checkInput('')
    checkNext('more')
    checkPrev('more')
    if (color > 0) {
      setColor(color-1);
    }
    else{
      checkPrev('none')
    }
  };

  const handleChange = (event) => {
    setAnswer(event.target.value)
  }

  const verify = () =>{
    
    if (answer == names[color]){
      checkInput('correct')
    }
    else{
      checkInput('wrong')
    }
  }

  return (
    <div className="App">
      <h1>Obscure Colors</h1>
      <h2>Try memorizing these 20 obscure color names!</h2>

      <p>{answer}</p>

      <input
        type="text"
        name={input}
        value ={answer}
        placeholder='Guess the color!'
        onChange={handleChange}
        className={input}

      />

      <div className = "container">
        
        <div>
          <button onClick={verify}>Check Answer</button>
          <Card theName = {names[color]} theColor = {colors[color]}/>

          <button className={prev} lable = "prev" onClick={prevColor}>prev</button>
          <button className={next} lable = "next" onClick={nextColor}>next</button>

        </div>

      </div>
      
    </div>
  );
};

export default App
