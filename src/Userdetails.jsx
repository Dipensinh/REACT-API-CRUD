import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Userdata from './Userdata';


const Userdetails = () => {

    const {userid} = useParams()
    const [userdetails , setUserdetails] = useState({})

    useEffect(()=>{
        fetch("http://localhost:7000/userdata/"+ userid).then((result)=>{
            result.json().then((resp)=>{
                // console.log(resp);
                setUserdetails(resp)
            })
        })
    },[])
    console.log(userdetails);
    return ( 
        <>
        <h1>USERDETAILS</h1>
    
            
            
             <MDBTable>
      <MDBTableHead>
        <tr>
            <td><h3>ID</h3></td>
            <td><h3>BRAND</h3></td>
            <td><h3>CARNAME</h3></td>
            <td><h3>AVARAGE</h3></td>
        </tr>
        
      </MDBTableHead>
      <MDBTableBody>
        {
            userdetails&&
            <tr>
                <td><h5>{userdetails.id}</h5></td>
                <td><h5>{userdetails.brand}</h5></td>
                <td><h5>{userdetails.carname}</h5></td>
                <td><h5>{userdetails.avarage}</h5></td>
            </tr>
        }               
      </MDBTableBody>
    </MDBTable>
            

        </>
     );
}
 
export default Userdetails;