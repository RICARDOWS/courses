import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
  return (
    <>
    <h1>DcScreen</h1>
    <HeroList value='DC Comics' target='publisher'/>
    </>
  )
}