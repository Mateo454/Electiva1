import React from 'react'
import Logo from "./../../assets/brand/img/Logo.png"

export default function NotFound() {
  return (
    <section className='page-error'>
      <div className='container'>
        <img
          src={Logo}
          alt=''
        />
      </div>
    </section>
  )
}