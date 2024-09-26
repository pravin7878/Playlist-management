import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import List from '../pages/List'
import PlayListsCont from '../pages/PlayListsCont'

export default function AllRouts() {
  return (
    <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/list"} element={<List/>}/>
        <Route path={"/product/playlist"} element={<PlayListsCont/>}/>
    </Routes>
  )
}
