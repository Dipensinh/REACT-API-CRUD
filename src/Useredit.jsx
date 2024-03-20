// import React from 'react';
import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Useredit = () => {  

    const {userid} = useParams()
    const [id , setId] = useState("")
    const [brand , setBrand] = useState("")
    const [carname , setCarname] = useState("")
    const [avarage , setAvarage] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        fetch("http://localhost:7000/userdata/"+ userid).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                setBrand(resp.brand)
                setCarname(resp.carname)
                setAvarage(resp.avarage)
                setId(resp.id)
            })
        })
    },[])

    const savedata = ()=>{
        console.log("savedata");
         let data ={id , brand , carname, avarage}
        fetch("http://localhost:7000/userdata/"+ userid ,{
            method : "PUT",
            headers :{
                "Content-type" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                navigate("/")
            })
        })
    }
    return ( 
        <>
        <h1>USEREDIT</h1>


        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                {/* <form onSubmit={savedata}> */}
                    <MDBInput  autocomplete="off"  wrapperClass='mb-4' value={id} onChange={(e)=>setId(e.target.value)}  label='Id' id='form1' type='text' />
                    <MDBInput  autocomplete="off" value={brand} onChange={(e)=> setBrand(e.target.value)} wrapperClass='mb-4' label='brand' id='form2' type='text' />
                    <MDBInput  wrapperClass='mb-4' value={carname} onChange={(e)=> setCarname(e.target.value)} label='carname' id='form3' type='text' />
                    <MDBInput  wrapperClass='mb-4' value={avarage} onChange={(e)=> setAvarage(e.target.value)} label='avarage' id='form4' type='text' />
                    <input type="submit" value="useredit" onClick={savedata} />
                    {/* <button onClick={savedata}>SAVEDATA</button> */}
                {/* </form> */}

            </MDBContainer>
        </>
     );
}
 
export default Useredit;