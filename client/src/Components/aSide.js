import React, { useEffect, useState } from 'react'
import vkLogo from '@assets/img/vk_logo.png'
import ttLogo from '@assets/img/tt_logo.png'
import instLogo from '@assets/img/inst_logo.png'
import person from '@assets/img/person_aside.png'

export default function ASide() {
  const [changePerson, setChangePerson] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setChangePerson(true)
    }, 1500)
  }, [])

  return (
    <aside className="aside-wrapper">
      <div className="aside-body">
        <div className="aside-socials">
          <a>
            <img src={instLogo} />
          </a>
          <a>
            <img src={vkLogo} />
          </a>
          <a>
            <img src={ttLogo} />
          </a>
        </div>
      </div>
      <div
        style={{ left: changePerson ? '40px' : '-100%' }}
        className="aside-person"
      >
        <img src={person} alt="person aside" />
      </div>
    </aside>
  )
}
