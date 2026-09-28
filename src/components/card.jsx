import "../App.css"


export default function Card({guitar_img, artist, backCard}) {
    return (
        <div className = "card">
            <div className = {`card-inner ${backCard ? 'flipped' : ''}`}>
                <div className = "front">
                    <h1 style={{ fontSize: '24px' }}>Whose guitar is this?</h1>
                    <img style={{ width: 100, height: 100 }} src = {guitar_img}></img>
                </div>
                <div className = "back">
                    <h1 style={{ fontSize: '24px' }}>{artist}</h1>
                </div>
            </div>
        </div>
    )
}