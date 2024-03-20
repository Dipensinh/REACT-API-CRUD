import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
    import { useEffect } from 'react';

const Useradd = () => {
        
    const [brand , setBrand] = useState("")
    const [carname , setCarname] = useState("")
    const [avarage , setAvarage] = useState("")

    function savedata (e) {
        e.preventDefault()
        const  data = {brand , carname , avarage}

        fetch("http://localhost:7000/userdata" , {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
            })
        })
    }


    
    return ( 
        <>
        <h1>USERADD</h1>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                {/* <form onSubmit={savedata}> */}
                    <MDBInput  autocomplete="off"  wrapperClass='mb-4' disabled label='Id' id='form1' type='text' />
                    <MDBInput  autocomplete="off" value={brand} onChange={(e)=> setBrand(e.target.value)} wrapperClass='mb-4' label='brand' id='form2' type='text' />
                    <MDBInput  wrapperClass='mb-4' value={carname} onChange={(e)=> setCarname(e.target.value)} label='carname' id='form3' type='text' />
                    <MDBInput  wrapperClass='mb-4' value={avarage} onChange={(e)=> setAvarage(e.target.value)} label='avarage' id='form4' type='text' />
                    {/* <input type="submit" value="useradd" onClick={savedata} /> */}
                    <button onClick={savedata}>SAVEDATA</button>
                {/* </form> */}

            </MDBContainer>
        </>
     );
}
 
export default Useradd;