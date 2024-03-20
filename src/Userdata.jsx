import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Userdata() {

    const [userdata , setUserdata] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        fetch("http://localhost:7000/userdata").then((result)=>{
            result.json().then((resp)=>{
                // console.log(resp);
                setUserdata(resp)
            })            
        })
    },[])
    function useradd (){
        navigate("/useradd")
    }
    
    const Edit =(id)=>{
      console.log("edit");
      console.log(id);
      navigate("/useredit/" + id)
    }
    const Details =(id)=>{
      console.log("details");
      console.log(id);
      navigate("/userdetails/" + id)
    }  

    const Delet = (id) =>{
      console.log("delet");
      console.log(id);
      if(window.confirm("do you want to delet")){
        fetch("http://localhost:7000/userdata/" + id,{
          method :"DELETE"
        }).then((resp)=>{
          alert("your data removed successfully")
          window.location.reload()
        }).catch((er)=>{
          console.log(er);
        })
      }
    }

    console.log(userdata);

  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>BRAND</th>
          <th scope='col'>CARNAME</th>
          <th scope='col'>AVARAGE</th>
          <th scope='col'>ACTION</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
            <td><button onClick={useradd}>ADDUSER</button></td>
        </tr>
        {
            userdata.map((value)=>
              <tr>
                <td>{value.id}</td>
                <td>{value.brand}</td>
                <td>{value.carname}</td>
                <td>{value.avarage}</td>
                <td>
                <button onClick={()=>Edit(value.id)}>EDIT</button>
                <button onClick={()=>Details(value.id)}>DETAILS</button>
                 <button onClick={()=>Delet(value.id)}>DELET</button>
                </td>
              </tr>         
            )
        }        
      </MDBTableBody>
    </MDBTable>
  );
}