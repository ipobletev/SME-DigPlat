import React from 'react'
import Header from '../components/Header'
import BluetoothWifi from '../components/BluetoothWifi'
import OCRtesseract from '../components/OCRtesseract'
import UploadImage from '../components/UploadImageOCR'
import UploadImageOCR from '../components/UploadImageOCR'

const Home = () => {
    return (
        <div>
        <Header />
        <BluetoothWifi />
        <UploadImageOCR />
        </div>
    )
}

export default Home
