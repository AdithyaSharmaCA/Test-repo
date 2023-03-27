import React from "react"
import Card from './Card'
import Create from "./Create_Card"
import './Card.css'
import my_video from './test_video_1.mp4'
import my_video_2 from './test_video_2.mp4'
function App() {
  return (
    <div className="App_wrapper">
      <div>
      <Create text="Enter to create card"></Create>
      </div>
      <Card name_of_card="user1" video={my_video} category="Music"/>
      <Card name_of_card="user2"/>
      <Card name_of_card="user3"/>
    </div>
  )
}
export default App
