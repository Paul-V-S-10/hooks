import React, { useState } from 'react'
import './PlayerCard.css'

const PlayerCard = () => {
    const [rotated, setRotated] = useState(false)
    const [image, setImage] = useState(null)
    const [obj,setObj] = useState({
        playerName:'',
        number:''
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        console.log(e.target);
        setObj({
            ...obj,
            [name] : value
        })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    }

    const rotate = () => { setRotated(!rotated) }
    return (
        <div className='playerCard'>
            <div className={`card ${rotated ? 'rotated' : ''}`}>
                <div className="fillForm">
                    <div className="cardGenerator"><h1>Card Generator</h1></div>
                    <div className="box">
                        <div className="title">Name : </div>
                        <div className="inputBox"><input type="text" onChange={handleChange} value={obj.playerName} name='playerName' className='input' placeholder='Enter your name' /></div>
                    </div>
                    <div className="box">
                        <div className="title">Jersey Number : </div>
                        <div className="inputBox"><input type="text" onChange={handleChange} value={obj.number} name='number' className='input' placeholder='Enter jersey number' /></div>
                    </div>
                    <div className="box">
                        <div className="title">Upload Image : </div>
                        {/* <div className="inputBox"><input onChange={handleImageChange} className='input' type="file" /></div> */}
                        <label for="file-upload">
                            <input type="file" onChange={handleImageChange} id="file-upload" />
                            <span className="file-upload-button">Browse...</span>
                        </label>
                    </div>
                    <button className='my-button' onClick={rotate}>Generate</button>
                </div>
                <div className="displayCard">
                    <div className="image">{image && <img src={image} className='uploadedImage' />}</div>
                    <div className="playerName">{obj.playerName}</div>
                    <div className="number">{obj.number}</div>
                    <div className="button"><button className='backButton' onClick={rotate}>Back</button></div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard