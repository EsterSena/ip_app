import { useState } from 'react'
import './App.css'
function Aplication() {

    const [ip, setIp] = useState('')

    fetch('https://api.ipify.org?format=json')
        .then(async (response) => {
            console.log(response)

            return response.json()
        }).then(async (resposta) => {
            const ipAddress = await resposta?.ip;
            setIp(ipAddress);
        })

    return (
        <>

            <div className='box'>
                <h1>Este é seu Ip</h1>
                <p>{ip}</p>
            </div>
        </>
    );
}

export default Aplication;