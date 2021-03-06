import React, { useState } from 'react'
import LeftNav from './LeftNav'

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={open ? 'styled-burger line line-open' : 'styled-burger line line-closed'}
        onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </nav>
      <LeftNav open={open} setOpen={() => setOpen(!open)}/>
    </>
  )
}
export default Burger
