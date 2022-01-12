import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import baseBody from './resources/basesigmoji.png';

function App() {
  const canvasRef = useRef(undefined);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);

  const randomRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const redraw = (i) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    var link = document.createElement('a');
    link.download = i + '.png';
    link.href = document.getElementById('character').toDataURL()
    link.click();

    context.clearRect(0, 0, canvas.width, canvas.height);

    const image = new Image();
    image.src = baseBody;

    image.onload = () => {
      const x = (context.canvas.width / 3) - (image.width / 3);
      setCenterX(x)

      const y = (context.canvas.height / 2) - (image.height / 2);
      setCenterY(y);

      context.mozImageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.msImageSmoothingEnabled = false;
      context.imageSmoothingEnabled = false;

      var grd = context.createLinearGradient(0, 0, 512, 0);
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      grd.addColorStop(0, '#' + n.slice(0, 6));
      n = (Math.random() * 0xfffff * 1000000).toString(16);
      grd.addColorStop(1, '#' + n.slice(0, 6));

      // Fill with gradient
      context.fillStyle = grd;
      context.fillRect(0, 0, 512, 512);

      context.drawImage(image, 150, 100, image.width*10, image.height*10);
    };
  }

  useEffect(redraw, []);

  const drawClothing = async (bodyPart, numItems, offsetX, offsetY) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    return new Promise((resolve, reject) => {
      import(`./resources/${bodyPart}/${numItems}.png`)
      .then(image => {
        const img = new Image();
        img.src = image.default;
    
        img.onload = () => {
          context.drawImage(img, centerX + offsetX, centerY + offsetY, img.width*10, img.height*10);
          resolve(true);
        }
      })
      .catch((error) => reject(error));
    });

  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const generateOutfit = async () => {
    let csvContent = "data:text/csv;charset=utf-8,";

    for (let i = 0; i <= 10001; i++) {
      await sleep(300);
      redraw(i);

      let feet_num = randomRange(0, 20)
      let legs_num = randomRange(0, 16)
      let body_num = randomRange(0, 48)
      let hands_acc_num = randomRange(0, 10)
      let body_acc_num = randomRange(0, 11)
      let head_acc_num = randomRange(0, 19)
      let head_num = randomRange(0, 38)
      let pet_num = randomRange(0, 9)

      if (randomRange(0, 4) !== 0) {
        hands_acc_num = 0
      }
      if (randomRange(0, 4) !== 0) {
        body_acc_num = 0
      }
      if (randomRange(0, 4) !== 0) {
        head_acc_num = 0
      }
      if (randomRange(0, 4) !== 0) {
        pet_num = 0
      }

      await drawClothing('feet', feet_num, -14, 172);
      await drawClothing('legs', legs_num, 16, 72);
      await drawClothing('body_base', body_num, -74, -28);

      await drawClothing('hands_acc', hands_acc_num, -74, -28);
      await drawClothing('body_acc', body_acc_num, -74, -28);
      await drawClothing('head_acc', head_acc_num, 6, -168);
      
      await drawClothing('head_base', head_num, 6, -168);
      await drawClothing('pet', pet_num, 106, 82);

      csvContent += i + ",Sigmoji #" + i + "\r\n";
    }

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "image_data.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
  }

  return (
    <div id="App">
      <h1 id="header">Random Character Generator!</h1>
      <h3 id="authors">Made with ❤️ by Johnny and Colin </h3>
      <canvas ref={canvasRef} id="character" width="512" height="512"></canvas>
      <button id="generate_btn" onClick={generateOutfit}>Generate!</button>
    </div>
  );
}

export default App;