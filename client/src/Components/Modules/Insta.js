import React, { useEffect, useState } from 'react'
import img1 from '@assets/img/inst_1.jpg'
import img2 from '@assets/img/inst_2.jpg'
import img3 from '@assets/img/inst_3.jpg'
import img4 from '@assets/img/inst_4.jpg'
import img5 from '@assets/img/inst_5.jpg'
import img6 from '@assets/img/inst_6.jpg'
import dimasLogo from '@assets/img/inst_ico.png'

function Insta() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    setPhotos([
      { link: 'https://www.instagram.com/p/CRZMM8-LISc/', image: img1 },
      { link: 'https://www.instagram.com/p/CMnIN0Entok/', image: img2 },
      { link: 'https://www.instagram.com/p/CGunbs6npjN/', image: img3 },
      { link: 'https://www.instagram.com/p/CFpYwWLnIbC/', image: img4 },
      { link: 'https://www.instagram.com/p/CE4G8fknm9P/', image: img5 },
      { link: 'https://www.instagram.com/p/CEmhKKUHzk9/', image: img6 },
    ])
  }, [])

  return (
    <div className="insta-wrapper">
      <div className="insta-subscribers-wrapper">
        <div className="insta-subscribers-image">
          <img src={dimasLogo} />
        </div>
        <div className="insta-subscribers-text">
          <span>
            <span>514</span> ПОДПИСЧИКОВ
          </span>
          <a href="https://www.instagram.com/dimonstrate/" target="_blank">
            <button>SUBSCRIBE</button>
          </a>
        </div>
      </div>
      <div className="insta-photos-container">
        <div className="insta-photos-wrapper">
          {photos.map((item, id) => {
            return (
              <div key={id} className="insta-photo-item">
                <div
                  className="insta-photo-image"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <a href={item.link} target="_blank">
                  <span className="insta-photo-image-hovered" />{' '}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Insta
