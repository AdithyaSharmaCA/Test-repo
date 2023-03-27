import React from "react"
import ReactDOM from "react-dom"
import {useState} from "react"
import Card from "./Card"
import my_video_3 from "./test_video_3.mp4"
function Create_Card()
{
    const [val,setVal] = useState([])
    const handleAdd=()=>{
        const abc=[...val,[]]
        setVal(abc)
    }
    const handleDelete = (i)=>{
        const deleteVal=[...val]
        deleteVal.splice(i,1)
        setVal(deleteVal)
    }
    return(
        <div className="form">
            <button onClick={()=>handleAdd()} className="card_button">Create a card</button>
            <div>
            <h1><p>Upon clicking the create button, multiple copies of the same card are created.</p></h1>
            <h2><p>The newly created cards can be edited using the edit button</p></h2>
            <h2><p>The newly created cards have a delete button and they can be deleted</p></h2>
            </div>
            {val.map((data,i)=>{
                return(
                    <div key={i}>
                        <Card value={data}name_of_card="user1" video={my_video_3} category="Music"/>
                        <button onClick={()=>handleDelete(i)}className="card_button">Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Create_Card
/* import React from "react"
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
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                <h1>{this.props.text}</h1>
                <p><label name="name">Enter the name of the new card:<input type="text"></input></label></p>
                <p><label name="link">Enter the link of the video:<input type="text" ></input></label></p>
                <p><label name="bucket">Enter the category it belongs to <input type="text"></input></label></p>
                <input type="submit" className="card_button"></input>
                </form>
                <Card name_of_card={this.state.name} video={this.state.link} category={this.state.bucket}></Card>
            </div>
        )
    }
}
export default Create_Card */