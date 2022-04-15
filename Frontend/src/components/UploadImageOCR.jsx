import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';

window.addEventListener("paste", e => {
  if (e.clipboardData.files.length > 0) {
    const fileInput = document.querySelector("#myFile");

    fileInput.files = e.clipboardData.files;

    if (e.clipboardData.files[0].type.startsWith("image/")) {
      setPreviwImage(e.clipboardData.files[0]);
    }
  }
})

window.addEventListener("change", i => {
  console.log(i.target.files[0]);
  if (i.target.files.length > 0) {
    const fileInput = document.querySelector("#myFile");
    
    fileInput.files = i.target.files;
    
    if (i.target.files[0].type.startsWith("image/")) {
      setPreviwImage(i.target.files[0]);
    }
  }
})

function setPreviwImage(file) {
  const fileReader = new FileReader();
  
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    document.querySelector("#imagePreview").src = fileReader.result;
  }
  
  const doOCR = async () => {
    const worker = createWorker({
      logger: m => console.log(m),
    });
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(file);
    document.getElementById("resultOCR").innerHTML = text;
    
  };
  doOCR(); 
  
}

const UploadImageOCR = () => {
  return (
    <div>
        <form>
            <input type="file" id="myFile" name="myFile" />
            <button type="submit" >Upload</button>
        </form>
        <img alt="Preview" id="imagePreview" />
        <div className="OCRtesseract">
        <p id='resultOCR'>fasd</p>
    </div>
    </div>
  );
};

export default UploadImageOCR;