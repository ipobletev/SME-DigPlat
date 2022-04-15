import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';


function OCRtesseract() {
  const worker = createWorker({
    logger: m => console.log(m),
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    //const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    const { data: { text } } = await worker.recognize('https://upload.wikimedia.org/wikipedia/commons/4/4c/Texto_I_de_Gil_%281799%29.png');
    
    setOcr(text);
  };
  const [ocr, setOcr] = useState('Recognizing...'); 
  useEffect(() => {
    doOCR();
  });
  return (
    <div className="OCRtesseract">
      <p>{ocr}</p>
    </div>
  );
}

export default OCRtesseract;