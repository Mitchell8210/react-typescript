const express = require("express")
const axios = require("axios")
const app = express()
// this file is a very simple express server used to make a few calls to an api and send the data recieved to the client side of the application
// calls api and brings back the /post/1 data
app.get("/api/post", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then(resp => {
      console.log(resp.data)
      res.json(resp.data)
    })
    .catch(error => {
      console.log(error)
    })
})
// calls api and brings back the /users/1 data
app.get("/api/user", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(resp => {
      console.log(resp.data)
      res.json(resp.data)
    })
    .catch(error => {
      console.log(error)
    })
})
// calls api and brings back the /photos/1 data
app.get("/api/picture", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/photos/1")
    .then(resp => {
      console.log(resp.data)
      res.json(resp.data)
    })
    .catch(error => {
      console.log(error)
    })
})
// port to be used as proxy between client side and server side
const port = 5000

app.listen(port, () => console.log(`server started on port ${port}`))
