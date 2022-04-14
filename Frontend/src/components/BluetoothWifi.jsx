import React from "react";
import '../styles/BluetoothWifi.scss'

const conections = () => {navigator.bluetooth.requestDevice({filters:[{namePrefix:'LE'}]}).then(device => console.log(device))}

const BluetoothWifi = () => {
  return (
    <ul>
        <button className="blue" onClick={conections} >Conectar Bluetooth</button>

    </ul>
        

      
     
  );
};

export default BluetoothWifi;