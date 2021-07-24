import Page from '@components/Page/Page'
import React, { useEffect, useState } from 'react'
import zharu from '@assets/img/last_track.jpg'
import appleMusic from '@assets/img/appleMusicLogo.png'
import Boom from '@assets/img/boomLogo.png'
import Shazam from '@assets/img/shazamLogo.png'
import Spotify from '@assets/img/spotifyLogo.png'
import iTunes from '@assets/img/itunesLogo.png'
import vk from '@assets/img/vkLogo.png'

export default function Band_Link() {
  const [links, setLinks] = useState([])

  useEffect(() => {
    setLinks([
      {
        name: 'Apple Music',
        img: appleMusic,
        link: 'https://music.apple.com/ru/album/%D0%B6%D0%B0%D1%80%D1%8E/1574893119?i=1574893139',
      },
      {
        name: 'Boom',
        img: Boom,
        link: 'https://boom.ru/redirect/album/15914074?mt_sub3=15914074&mt_sub1=%25D0%2596%25D0%2590%25D0%25A0%25D0%25AE&mt_click_id=mt-tbcax1-1627121192-315593646&mt_sub2=album',
      },
      {
        name: 'Shazam',
        img: Shazam,
        link: 'https://www.shazam.com/ru/track/576153884/-',
      },
      {
        name: 'Spotify',
        img: Spotify,
        link: 'https://music.apple.com/ru/album/%D0%B6%D0%B0%D1%80%D1%8E/1574893119?i=1574893139',
      },
      {
        name: 'VK',
        img: vk,
        link: 'https://vk.com/music/album/-2000116188_12116188_55b6e399ae0637d03a',
      },
    ])
  }, [])

  const body = (
    <div className="link-wrapper">
      <div className="link-img">
        <img src={zharu} />
      </div>
      <div className="link-description">
        <h2>Dimonstrate</h2>
        <h1>ЖАРЮ</h1>
      </div>
      <div className="link-content-wrapper">
        {links.map((item, id) => {
          return (
            <a key={id} href={item.link} target="_blank">
              <div className="link-content-item">
                <div className="link-content_item_img">
                  <img src={item.img} />
                </div>
                <div className="link-content_item_name">
                  <span> {item.name}</span>
                </div>
                <div className="link-content_item_button">
                  <button>Слушать</button>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )

  return <Page title="Band Link" body={body} />
}
