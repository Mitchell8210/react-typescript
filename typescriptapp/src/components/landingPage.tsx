import React, { useState } from "react"
import axios from "axios"

const LandingPage: React.FC = () => {
  // variables to be used to render the data from the axios calls
  const [singlePost, setSinglePost] = useState()
  const [user, setUser] = useState()
  const [picture, setPicture] = useState()

  // functions used to call the backend and bring back data requested
  const getSinglePostData = () => {
    axios.get("/api/post").then(resp => {
      console.log(resp.data)
      setSinglePost(resp.data)
    })
  }

  const getSingleUserData = () => {
    axios.get("/api/user").then(resp => {
      console.log(resp.data)
      setUser(resp.data)
    })
  }

  const getSinglePictureData = () => {
    axios.get("/api/picture").then(resp => {
      console.log(resp.data)
      setPicture(resp.data)
    })
  }
  return (
    <div className="landingPage">
      <h1>This is the landing page</h1>

      {singlePost === undefined ? (
        <div>
          <h3>This button will render a single post.</h3>
          <button onClick={getSinglePostData}>Click me!</button>
        </div>
      ) : (
        <div className="singlePost">
          <h3>Single Post</h3>
          <p>{singlePost.title}</p>
          <p>{singlePost.body}</p>
        </div>
      )}

      {user === undefined ? (
        <div>
          <h3>This button will render a single User.</h3>
          <button onClick={getSingleUserData}>Click me!</button>
        </div>
      ) : (
        <div className="singleUser">
          <h3>Single User</h3>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}

      {picture === undefined ? (
        <div>
          <h3>This button will render a single Picture.</h3>
          <button onClick={getSinglePictureData}>Click me!</button>
        </div>
      ) : (
        <div className="singlePic">
          <h3>Single Picture</h3>
          <img src={picture.url} />
        </div>
      )}
    </div>
  )
}

export default LandingPage
