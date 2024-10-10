import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { handleLogout } from '../Authentication/Login';
import { useEffect } from 'react';
import { fetchYouTubePlaylists } from '../redux/slices/dataSlice';
// import { checkUser } from '../redux/slices/userSlice';

export default function Header() {
  const user = useSelector((state) => state?.user?.auth)
  const dispatch = useDispatch()
console.log(user);

const playlist = useSelector((state)=>state?.data?.playlists?.result)
const navigate = useNavigate()


useEffect(()=>{
  if (playlist?.items){
  navigate("/product/playlist")
}
},[playlist])



  return (
    <div className='flex justify-between items-center pl-4 pr-4 text-white rounded-xl bg-darklight '>
      <div>
       {user?.isLogin ? <h3>Well-Come {user?.user?.name}</h3> : null}
      </div>

      <button className='border-2 p-1 rounded-md m-2' onClick={() => dispatch(fetchYouTubePlaylists())}>Import From Youtube</button>

      <div className='flex justify-around font-bold items-center'>
        {user?.isLogin ? 
        <button onClick={()=>handleLogout(dispatch)} className='bg-orange-600 pl-4 pr-4 p-1 rounded-md text-white  text-center'>Logout</button>
        :
        <Link to="/login" className='bg-orange-600 pl-4 pr-4 p-1 rounded-md text-white text-center'>SingIn</Link>
      }
        {/* <span className='w-1/3 p-2'> 
          <img src={logoIcon} alt="profile" className='w-full'/>
          </span> */}
      </div>
    </div>
  )
}
