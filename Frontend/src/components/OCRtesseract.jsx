import React from "react";
import Tesseract from 'tesseract.js';

const teseracto = () => {
  Tesseract.recognize(
    'https://tesseract.projectnaptha.com/img/eng_bw.png',
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    console.log(text);
  })
}

const OCRtesseract = () => {
  return (
    <ul>
      1
        <button className="OCRtesseract" onClick={teseracto} >Conectar no se</button>
    </ul>    
  );
}

export default OCRtesseract;