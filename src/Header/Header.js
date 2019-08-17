import React from 'react'
import Search from './Search'
import Login from './Login'

class Header extends React.Component {
 constructor (props)
 { super(props)}

 render (){
     return (
         <div>
            Coolinarika.com 
            <Search/>
            <Login/>
         </div>
           
     )
 }

}
export default Header