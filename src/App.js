import React, {useState} from 'react';
import { format } from 'date-fns'
import './styles.css';
import logo from './imgs/netflix.png';

function App() {

  const createPoster = (link, text) => {
    return (
      <div className="poster-wrapper" 
          style={{
            backgroundImage: `url(${link})`,
          }}
        >
        <h1>{text}</h1>
      </div>
    )
  }  

  const icePoster = createPoster("https://source.unsplash.com/gYl-UtwNg_I/1500x1500", "HEY");
  const waterPoster = createPoster("https://source.unsplash.com/rFKUFzjPYiQ/1500x1500", "LET'S");
  const mounatainPoster = createPoster("https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d", "GIVE");
  const foxPoster = createPoster("https://source.unsplash.com/ITjiVXcwVng/1500x1500", "ALL");
  const cloudPoster = createPoster("https://source.unsplash.com/3MNzGlQM7qs/1500x1500", "YOU CAN");

  return (
    <>
      <header>
        <div>
          <img src={logo}  width="70" height="70" className="d-inline-block align-top" alt=""/>
          <span>Stranger Things, Attack on Titan</span>
        </div>

        <div>
          <span>{format ( new Date(), 'MM.dd.yyyy HH:mm')}</span>
        </div>
      </header>

      <div className='myContainer'>
        {icePoster}
        {waterPoster}
        {mounatainPoster}
        {foxPoster}
        {cloudPoster}
      </div>
    </>
  );
}

export default App;
