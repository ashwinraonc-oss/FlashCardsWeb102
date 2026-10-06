import { useState } from "react";
import Card from "./components/card.jsx"
import bbking from "./assets/bbkingguitar.webp"
import clapton from "./assets/ericclaptonguitar.avif"
import hendrix from "./assets/jimihendrixguitar.webp"
import cobain from "./assets/kurtcobainguitar.webp"
import slash from "./assets/slashguitar.webp"
import vanhalen from "./assets/vanhalenguitar.jpeg"

export default function App() {
  const [backCard, setBackCard] = useState(false)
  const [flashCardNum, setFlashCardNum] = useState(0)
  const [guess, setGuess] = useState("")
  const [isCorrect, setIsCorrect] = useState(null)
  const [streak, setStreak] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const cards = [{artist: "Jimi Hendrix", guitar_img: hendrix},
                  {artist: "BB King", guitar_img: bbking},
                  {artist: "Eric Clapton", guitar_img: clapton},
                  {artist: "Kurt Cobain", guitar_img: cobain},
                  {artist: "Slash", guitar_img: slash},
                  {artist: "Eddie Van Halen", guitar_img: vanhalen}]

  const max = cards.length
  
  function incrementNum(){
    if (flashCardNum < cards.length - 1){
      setFlashCardNum(flashCardNum + 1)
    }
    
  }
  function decrementNum(){
    if (flashCardNum > 0){
      setFlashCardNum(flashCardNum - 1)
    }
  }

  function chooseRandomCard(){
    setFlashCardNum(Math.floor(Math.random() * max))
    setBackCard(false)
  }

  function flipCard(){
    setBackCard(!backCard)
  }

  function handleSubmit(e){
    e.preventDefault()
    if (guess.trim().toLowerCase() == cards[flashCardNum].artist.toLowerCase()){
      const newStreak = streak + 1
      setIsCorrect(true)
      setStreak(streak + 1)
      if (newStreak > highScore){
        setHighScore(newStreak)
      }
    } else {
      setIsCorrect(false)
      setStreak(0)
    }
  }



  return (
    <>
    <div className = "container">
          <h1>The Guitar Test</h1>
          <h2>Do you know your guitars?</h2>
          <h2>
            Card {flashCardNum + 1}/{cards.length}
          </h2>
          <div onClick = {flipCard}>
            <Card 
              className = "card" 
              backCard = {backCard}
              artist = {cards[flashCardNum].artist} 
              guitar_img = {cards[flashCardNum].guitar_img}
          />
          </div>
          <div className = "buttonContainer">

            <button disabled = {flashCardNum == 0} onClick = {()=>{
              decrementNum()
              setGuess("")
              setIsCorrect(null)
            }}>←</button>

            <button onClick = {()=>{
              chooseRandomCard()
              setGuess("")
              setIsCorrect(null)
            }}>Choose random card!</button>

            <button disabled = {flashCardNum == cards.length - 1} onClick = {()=>{
              incrementNum()
              setGuess("")
              setIsCorrect(null)
            }}>→</button>

            <form onSubmit = {handleSubmit}>
              <label>
                Guess the Artist:
                <input className = "guess" type = "text" value = {guess} onChange = {(e) => setGuess(e.target.value)}/>
              </label>
              <input type = "submit" value = "Submit"/>
              <div>
                {isCorrect === null ? null
                : isCorrect ? <h3>Correct!</h3>
                : <h3>Wrong Answer. Guess Again!</h3>
                }
                <h3>current streak: {streak}</h3>
              </div>
              <h3>high score: {highScore}</h3>

            </form>
            
          </div>
    </div>
    </>
  )

}