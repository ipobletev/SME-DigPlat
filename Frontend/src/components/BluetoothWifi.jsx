import React from "react";
import '../styles/BluetoothWifi.scss'

const conections = () => {
    navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service'] // Required to access service later.
      })
      .then(device => { /* … */ })
      .catch(error => { console.error(error); });
}

const BluetoothWifi = () => {
  return (
    <ul>
        <button className="blue" onClick={conections} >Conectar Bluetooth</button>
    </ul>
    

      
     
  );
};

export default BluetoothWifi;