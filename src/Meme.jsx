import React from "react"

export default function()
{
    const [meme, setMeme] = React.useState({ 
                    
                    topText :"",
                    bottomText : "",
                    randomImage : "http://i.imgflip.com/1bij.jpg"                        
                });
    const [allMemeImages, setallMemeImages] = React.useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setallMemeImages(data.data.memes))
    }, [])

    function imageOnClick()
    {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme( x=> {
            return {
                ...x,
                randomImage : memesArray[randomNumber].url
            } })

    }
    function handleFormChange(event)
    {
        const {type, name, value} = event.target
        
        setMeme(prev=> ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form--meme">
                <input type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleFormChange}
                    ></input>
                <input 
                    type="text" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText} 
                    className="form--input"
                    onChange={handleFormChange}
                    ></input>
    
                <button onClick={imageOnClick}  className="submit--meme" type="submit">Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 
                    className="meme--text top"
                    type="text"
                    name="topText"
                    value={meme.topText}
                >{meme.topText}</h2>
                <h2 
                    className="meme--text bottom"
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                >{meme.bottomText}</h2>
            </div>
        </main>
    )
}