import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import List from '../pages/playlist/List'
import PlayListsCont from '../pages/playlist/PlayListsCont'
import { LoginSuccess } from '../Authentication/loginSuccess'
// import Login from '../Authentication/Login'
import { OauthLogin } from '../Authentication/OauthLogin'
import Login from '../Authentication/Login'
import { PlayListHome } from '../pages/playlist/PlayListHome'
import { VideoHome } from '../pages/video/VideoHome'


export default function AllRouts() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/success"} element={<LoginSuccess />} />
      <Route path='/login' element={<OauthLogin />} />
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route path={"/product/playlist"} element={<PlayListHome />} />
      <Route path={"/product/playlist/item"} element={<VideoHome/>} />

    </Routes>
  )
}
