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
            <button onClick = {chooseRandomCard}>Choose random card!</button>
          </div>
    </div>
    </>
  )

}