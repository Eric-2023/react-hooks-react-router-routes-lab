import React, {useEffect} from "react";
import { actors } from "../data";
import NavBar from "./NavBar"

function Actors() {
  const [actors, setActors] = useState([])
  
    useEffect(() =>{
      fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(data => setActors(data))
      .catch(error => console.error(error))
    }, [])
  
    const actorList = actors.map(actor => <Card key={actor.id} name={actor.name} movies={actor.movies} />)

  return (
  <div>
    <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </div>
  )
}

export default Actors;
