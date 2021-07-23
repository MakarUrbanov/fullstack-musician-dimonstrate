import React, { useEffect, useState } from 'react'
import vkLogo from '@assets/img/vk_logo.png'
import ttLogo from '@assets/img/tt_logo.png'
import instLogo from '@assets/img/inst_logo.png'
import person from '@assets/img/person_aside.png'

export default function ASide() {
  const [changePerson, setChangePerson] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setChangePerson('40px')
    }, 1500)

    setTimeout(() => {
      setChangePerson('-100%')
    }, 15000)

    setTimeout(() => {
      setChangePerson('-70px')
    }, 17000)

    setTimeout(() => {
      setChangePerson('-100%')
    }, 19000)

    setTimeout(() => {
      setChangePerson('40px')
    }, 22000)
  }, [])

  return (
    <aside className="aside-wrapper">
      <div className="aside-body">
        <div className="aside-socials">
          <a href="https://www.instagram.com/dimonstrate/" target="_blank">
            <img src={instLogo} />
          </a>
          <a href="https://vk.com/88ssquad" target="_blank">
            <img src={vkLogo} />
          </a>
          <a
            href="https://www.tiktok.com/@dimonstrate?lang=ru-RU"
            target="_blank"
          >
            <img src={ttLogo} />
          </a>
        </div>
      </div>
      <div style={{ left: changePerson }} className="aside-person">
        <img src={person} alt="person aside" />
      </div>
    </aside>
  )
}
