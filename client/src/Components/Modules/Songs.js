import React, { useEffect, useState } from 'react'
import calmed from '@assets/img/calmed.png'
import yoyo from '@assets/img/yo_yo.png'
import floors9 from '@assets/img/9_floors.png'
import Zaru from '@assets/img/last_track.jpg'
import arrow from '@assets/img/arrow.png'

function Songs() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    setSongs(
      [
        { photo: floors9, name: 'Девятиэтажки' },
        { photo: yoyo, name: 'Йо Йо' },
        { photo: calmed, name: 'Спокоен' },
        { photo: Zaru, name: 'Жарю' },
      ].reverse()
    )
  }, [])

  return (
    <div className="songs-wrapper">
      <div className="songs-header">
        <h4>SONGS</h4>
        <div className="songs-header-line" />
      </div>
      <div className="songs-slider-wrapper">
        <span>
          <img src={arrow} />
        </span>
        {songs.map((item, id) => {
          if (id < 3) {
            return (
              <div key={id} className="songs-item">
                <div className="songs-image-wrapper">
                  <img src={item.photo} />
                </div>
                <a> {item.name} </a>
              </div>
            )
          }
        })}
        <span>
          <img src={arrow} style={{ transform: 'rotate(180deg)' }} />
        </span>
      </div>
    </div>
  )
}

export default Songs
