import React from 'react'
import Header from '../components/Header'
import BluetoothWifi from '../components/BluetoothWifi'
import OCRtesseract from '../components/OCRtesseract'
import UploadImage from '../components/UploadImage'

const Home = () => {
    return (
        <div>
        <Header />
        <BluetoothWifi />
        <OCRtesseract />
        <UploadImage />
        </div>
    )
}

export default Home
