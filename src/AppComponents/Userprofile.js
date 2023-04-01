import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import "./Userprofile.css";
import { useState } from "react";
import MyImage from ".././images/defaultimg.png"
import Userimg from './Userimg';
import axios from 'axios';

function Userprofile({setIsOpen,isOpen}) {

  const [imageSrc, setImageSrc] = useState(MyImage);
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [about, setAbout] = useState('');
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

  // const handlechange = (e)=>{
  //   setImage=e.target.files[0]
  // }
  const handleImageUpload = event => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageSrc(event.target.result);
    };
    reader.readAsDataURL(file);

    
    console.log(URL.createObjectURL(event.target.files[0]));
  };
  const handleClick = (e)=>{
    hiddenFileInput.current.click();
  }

  const saveChanges = () => {
    var data = new FormData();
    data.append('imageFile',image);
    data.append('fullName', fullName);
    data.append('email',"ahadullahkhokhar@gmail.com")
    debugger;
    axios.post('https://localhost:7195/api/Accounts/UpdateProfile',data)
    .then(response => {
      console.log(response.data);
      // handle response
    })
    .catch(error => {
      console.log(error);
      // handle error
    });

  }
  return (
    
    <div >
      <Navbar></Navbar>
      <Sidebar></Sidebar>
<div id="userprof" className={`  mt-5  ${isOpen ? "profilex" : "profile"}`}  >
<div className="row flex-lg-nowrap">
  <div className="col">
    <div className="row">
      <div className="col mb-3">
        <div className="card">
          <div className="card-body " style={{padding:'10px'}}>
            <div className="e-profile">
              <div className="row">
                <div className="col-12 col-sm-auto mb-3">
                  <div className="mx-auto" style={{ width: '140px'}}>
                   <img src={imageSrc}  width="140px" height="140px" />
                   <h1>  </h1>
                            <button
                              className="btn btn-outline-danger"
                              onClick={handleClick}
                              // {...dragProps}
                            >
                              Change Photo
                            </button>
                            <input type="file" ref={hiddenFileInput} accept="image/*" onChange={handleImageUpload} style={{display:"none"}} />
                  </div>
                </div>
                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                 
                  <div className="text-center text-sm-left mb-2 mb-sm-0">
                    <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                    <p className="mb-0">@johnny.s</p>
                    <div className="text-muted"><small>Last seen 2 hours ago</small></div>
                    <div className="mt-2 ">
                    </div>
                  </div>
                  <div className="text-center text-sm-right">
                    <span className="badge badge-secondary">administrator</span>
                    <div className="text-muted"><small>Joined 09 Dec 2017</small></div>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs">
                <li className="nav-item"><a href="" className="active nav-link">Settings</a></li>
              </ul>
              <div className="tab-content pt-3">
                <div className="tab-pane active">
                  <form className="form">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Full Name</label>
                              <input className="form-control" type="text" onChange={(e)=>setFullName(e.target.value)} placeholder="John Smith" value={fullName}/>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label>Phone Number</label>
                              <input className="form-control" type="tel"   placeholder="Enter your Number"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Address</label>
                              <input className="form-control" type="text" placeholder="Address"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mb-3">
                            <div className="form-group">
                              <label>About</label>
                              <textarea className="form-control" rows="5" placeholder="My Bio"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      
                    </div>
                    <div className="row">
                      <div className="col d-flex justify-content-end">
                        <button type='button' className="btn btn-primary" style={{background:'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}} onClick={saveChanges} >Save Changes</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
<Footer></Footer>
    </div>
  
  )
}

export default Userprofile