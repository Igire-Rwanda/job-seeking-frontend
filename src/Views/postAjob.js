import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';





function PostAJob() {


  const [item, setItem] = useState({ descr: "", name: "" ,requir:"",title:""});
  const [visible,setVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [image,setImage] = useState('');


  const changeItem = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  const imageUpload=(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        setImage(reader.result)
    });

    reader.readAsDataURL(file);
  }

  const addItem = () => {
    setItems([...items, item])
    setItem({ descr: "", name: "" ,requir:"",title:""})
    togglePopUp();
  }


  const togglePopUp=()=>{
    setVisible(!visible);
  }



  

  return (

    <>
    <div className="container mt-5" style={{padding:"80px 0 0 80px"}}>

      <button className='btn btn-success' onClick={togglePopUp}>Post A Job</button>
      <div className="row">
        <div className="col col-6">
          <ul className="list-group">
            {
              items.map(function (item, index) {
                return (<li key={index} className="list-group-item">
                  <div>{item.name}</div>
                  <div>{item.descr}</div>
                   <div>{item.title}</div>
                  <img src={item.requir} alt="img" ></img>
               
                </li>)
              })
            }

          </ul>
        </div>
        <div>
        </div>
      </div>
    </div>



          {/* opup */}

      <div className='popup' style={{display:visible ? "block":"none",padding:"0 80px"}} >
      <div className="col col-6 m-auto pupup-body mt-5">
          <div className="mb-3">
            <label className="form-label">Job Description</label>
            <input value={item.name} onChange={changeItem} name='name' type="text" className="form-control" placeholder="jobDescription" />
          </div>
          <div className="mb-3">
            <label className="form-label">Company Description</label>
            <input value={item.descr} onChange={changeItem} name='descr' type="text" className="form-control" placeholder="company description" />
          </div>
          <div className="mb-3">
            <label className="form-label">Job Requirements</label>
            <input value={item.title} onChange={changeItem} name='title' type="text" className="form-control" placeholder="job requirements" />
          </div>
          <div className="mb-3">
            <label className="form-label">Vacancy Type </label>
            <input value={item.requir} onChange={changeItem} name='requir' type="text" className="form-control" placeholder="Full-time" />
          </div>
          <div className="mb-3">
          <button className='btn btn-danger ml-5' onClick={togglePopUp}>How to Apply</button>
            <button value={item.location} onChange={changeItem} name='text' type="text" className="form-control" placeholder="Apply Here" />
          </div>
          <div className="mb-3">
            <label className="form-label">Upload CV</label>
            <input name='image' onChange={item.cvUpload} type="file" className="form-control" />
          </div>

          <div className='preview'>
          <img style={{width:"50px"}} alt='' src={item.cvUpload}  />
          </div>

          <div className="mb4">
            <button onClick={addItem} className='btn btn-warning'>SAVE</button>

            <button className='btn btn-danger ml-5' onClick={togglePopUp}>CLose</button>
          </div>
        </div>
      </div>



      {/* end on modal pupup */}

    </>
  );
}

export default PostAJob;
