import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import baseBody from './resources/basesigmoji.png';

function App() {
  const canvasRef = useRef(undefined);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const randomRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const redraw = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const image = new Image();
    image.src = baseBody;

    image.onload = () => {
      const x = (context.canvas.width / 2) - (image.width / 2);
      setCenterX(x)

      const y = (context.canvas.height / 2) - (image.height / 2);
      setCenterY(y);

      context.drawImage(image, x, y);
    };
  }

  useEffect(redraw, []);

  const drawClothing = (bodyPart, numItems, offsetX, offsetY) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    import(`./resources/${bodyPart}/${randomRange(0, numItems)}.png`)
    .then(image => {
      const img = new Image();
      img.src = image.default;
  
      img.onload = () => context.drawImage(img, centerX + offsetX, centerY + offsetY);
    });
  }

  const generateOutfit = () => {
    if(!isGenerating) {
      setIsGenerating(true);
      redraw();

      drawClothing('Head', 8, 2, -3);
      drawClothing('Legs', 5, 3, 21);
      drawClothing('Body', 7, -6, 11);
      drawClothing('Feet', 5, 0, 31);
      setIsGenerating(false);
    }
  }

  return (
    <div id="App">
      <h1 id="header">Random Character Generator!</h1>
      <h3 id="authors">Made with ❤️ by Johnny and Colin </h3>
      <canvas ref={canvasRef} id="character" width="64" height="64 "></canvas>
      <button id="generate_btn" onClick={generateOutfit} disabled={isGenerating ? true : false}>Generate!</button>
    </div>
  );
}

export default App;