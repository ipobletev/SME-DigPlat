import React from 'react'
import Header from '../components/Header'
import BluetoothWifi from '../components/BluetoothWifi'
import OCRtesseract from '../components/OCRtesseract'

const Home = () => {
    return (
        <div>
        <Header />
        <BluetoothWifi />
        <OCRtesseract />
        </div>
    )
}

export default Home
