import './App.css';
import {useEffect, useState} from 'react'
import Axios from 'axios'
import Game from './components/Game'

function App() {

  const [gameList, setGameList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{

      Axios.get(`https://www.cheapshark.com/api/1.0/games?title=${search}`)
          .then(res => setGameList(res.data))

          console.log(gameList)

  }, [search])

  return (
    <div >
      <h1>Játék keresés</h1>
      <input type="text" placeholde="Írd be egy játék nevét..." onChange={(e)=> setSearch(e.target.value)}/>

      <div className="container">
        {
          gameList.map(game => {

            return <Game key={game.gameID} gameID={game.gameID} external={game.external} thumb={game.thumb} steamAppID={game.steamAppID} />
          })
        }
      </div>
    </div>
  );
}

export default App;
