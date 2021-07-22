import React, { useEffect, useState } from 'react'
import backImage from '../../assets/img/last_track.jpg'

function Last_Release() {
  const [onLoadAlbum, setOnLoadAlbum] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOnLoadAlbum(true)
    }, 500)
  }, [])

  return (
    <div className="last_release-wrapper">
      <div className="last-release-bottom_line" />
      <div
        style={{ backgroundImage: `url(${backImage})` }}
        id="last_release-back-img"
      >
        <div className="blur" />
      </div>
      <img id="last_release-pattern" />
      <div className="last_release-album-image">
        <div
          style={{
            backgroundImage: `url(${backImage})`,
            bottom: onLoadAlbum ? 0 : 1000,
          }}
          className="last_release-album-img"
        />
      </div>
      <div className="last_release-album-name">
        <span> Жарю</span>
      </div>
      <div className="last_release-album-button">
        <div className="last_release-listen-wrapper">
          <div className="last_release-listen-line" />
          <button className="last_release-button">LISTEN</button>
        </div>
      </div>
    </div>
  )
}

export default Last_Release
