import React from "react";


window.addEventListener("paste", e => {
  if (e.clipboardData.files.length > 0) {
    const fileInput = document.querySelector("#myFile");

    fileInput.files = e.clipboardData.files;

    if (e.clipboardData.files[0].type.startsWith("image/")) {
      setPreviwImage(e.clipboardData.files[0]);
    }
  }
})

function setPreviwImage(file) {
  const fileReader = new FileReader();
  
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    document.querySelector("#imagePreview").src = fileReader.result;
  }

}


const UploadImage = () => {
  return (
    <div>
        <form>
            <input type="file" id="myFile" name="myFile" />
            <button type="submit" >Upload</button>
        </form>
        <img alt="Preview" id="imagePreview" />
    </div>
  );
};

export default UploadImage;