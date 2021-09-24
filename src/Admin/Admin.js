import React from 'react'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const Admin = () => {
    return (
        <div style={{textAlign:"center"}}>
         <Link to="/addbanner">   <Button>Add Banner</Button> </Link>
         <Link to="/addproduct">   <Button>Add Products</Button> </Link>
         <Link to="/addflashsalecard"> <Button>Add Flash Sale cards</Button></Link>
        </div>
    )
}

export default Admin
