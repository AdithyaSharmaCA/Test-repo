import React from "react"
import ReactDOM from "react-dom"
import {useState} from "react"
import Card from "./Card"
class Create_Card extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            name : "temporary",
            link : "get",
            bucket : "changed"
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        alert('you clicked on submit! the page will reload')
        this.setState({name: event.target.value, link: event.target.value, bucket: event.target.value})
        console.log(event.target.value)
    }
    render(props)
    {
        return(
            <div className="form">
                <button onClick={()=>{
                    ReactDOM.createPortal(<Card name_of_card={this.state.name} video={this.state.link} category={this.state.bucket}></Card>,
                    document.getElementById('root'))
                }}></button>
            </div>
        )
    }
}
export default Create_Card