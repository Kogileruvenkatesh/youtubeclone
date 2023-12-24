// import React from 'react'
// import "./Auth.css"
// import { GoogleLogout } from 'react-google-login'
// import { BiLogOut } from 'react-icons/bi'
// import { useDispatch } from 'react-redux'
// import { setCurrentUser } from '../../actions/currentUser'
// function Auth({User}) {
//     const dispatch=useDispatch();
//     const onLogoutSuccess=()=>{
//         dispatch(setCurrentUser(null));
//         alert("Log Out SuccessFully")
//     }
//   return (
//     <div className='Auth_container'>
//         <div className="Auth_container2">
//             <p className="User_Details">
//                 <div className="Chanel_logo_App">
//                     <p className="fstChar_logo_App">
//                         {User?.result.name ?(
//                             <>{  User?.result.name.charAt(0).toUpperCase() }</> 
//                         ):(
//                             <>{User?.result.email.charAt(0).toUpperCase()}</>
//                         ) }
//                     </p>
//                 </div>
//                 <div className="emil_Auth">{User?.result.email}</div>
//             </p>
//             <div className="btn_Auth">
//                 <input type="Submit" className='btn_Auth' value="Create Your Chanel" />
//             </div>
//             <div>
//                 <GoogleLogout
//                  clientId={
//                     "149239830755-3nvjqmqn6rlc5duokrpcqfuldo7iobvl.apps.googleusercontent.com"
//                 }
//                 onLogoutSuccess={onLogoutSuccess}
//                render={(renderProps)=>(
//                 <div onClick={renderProps.onClick} className='btn_Auth'>
//                     <BiLogOut/>
//                     Log Out
//                 </div>
//                )}
//                 />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Auth
