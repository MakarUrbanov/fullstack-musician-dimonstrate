import React, { useEffect, useState } from 'react'
import backImage from '../../assets/img/last_track.jpg'
import { NavLink } from 'react-router-dom'

function Last_Release() {
  const [onLoadAlbum, setOnLoadAlbum] = useState(false)
  const [wasLoaded, setWasLoaded] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('animation-last-release') !== 'yes') {
      setTimeout(() => {
        setOnLoadAlbum(true)
      }, 500)
      return sessionStorage.setItem('animation-last-release', 'yes')
    }
    setOnLoadAlbum(true)
    setWasLoaded(true)
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
            transition: wasLoaded ? '0s' : '2s',
          }}
          className="last_release-album-img"
        />
      </div>
      <div className="last_release-album-name">
        <span> Жарю</span>
      </div>
      <div className="last_release-album-button">
        <div className="last_release-listen-wrapper">
          <NavLink to="/link">
            <button className="last_release-button">LISTEN</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Last_Release
