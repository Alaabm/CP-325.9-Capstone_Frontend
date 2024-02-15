// import React from 'react'
// import { useState, useEffect } from 'react'

// const Gems = () => {
//     const [gems,setGems]  = useState([])

//     useEffect(() => {

//         const getGems = async () => {
//         try {
//             const response = await fetch("http://localhost:3000/gems")
//             const data = await response.json()
//             setGems(data)
//         }catch (err) {
//             console.log(err)
//         }
//         getGems()
//     }

//     }, []) 


//   return (
//     <>
//         <h1>GEMS</h1>
//             <form style={{textAlign:"left"}}>
//                 Username: <input type="text" placeholder="username"/><br />
//                 Password: <input type="password" placeholder="password"/><br />
//                 Topic: <input type="text" /><br />
//                 Gem: <input type="text" /><br />
//                 <input type="submit" value="Create Gem" />
//             </form>

//             <ul>
//                 {
//                     //This is where we will render the gems
//                     gems.length ?
//                         gems.map((g) => {
//                             return <div>
//                                 <h5>{g.username}</h5>
//                                 <p>{g.password}</p>
//                                 <h3>{g.topic}</h3>
//                                 <p>{g.gem}</p>
//                             </div>
//                         })

//                     :
//                     <p>No GEMS found :/</p>

//                 }
//             </ul>
//     </>
//   )
// }

// export default Gems


//Having trouble making post request in backend for localhost:3000/gem
//errors in gems.tsx