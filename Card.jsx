import React from "react"
import './Card.css'
import {useState} from "react"
class Card extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            name_of_card : this.props.name_of_card,
            video : this.props.video,
            category : this.props.category,
            clicked : 0
        }
    }
    history_function = ()=>{
        let history=[]
        let i=0
        return history,i
    }
    render()
    {
        return(
        <div className="card">
            <div className="body">
                <h1 className="card_name">{this.state.name_of_card}</h1>
                <video className="card_video" src={this.state.video} controls type="video/mp3"></video>
                <h2 className="card_bucket">Category : {this.state.category}</h2>
            </div>
            <button className="card_button" onClick={()=>{
                let name = prompt('enter the new name : ')
                let link = prompt('enter the new video link : ')
                let bucket = prompt('enter the new category name : ')
                this.setState({
                    name_of_card: name,
                    video : link,
                    category : bucket
                })
            }}>EDIT</button>
            <button className="card_button" onClick={()=>{
                let display_name = this.state.name_of_card
                let display_link = this.state.video
                let display_category = this.state.category
                console.log(display_category)
                alert("Name : "+display_name+", Video : "+display_link+ ", Category : "+display_category)
                this.setState({
                    clicked : 1
                })
            }}>VIEW</button>
        </div>)
    }
}
export default Card
/* import React from "react"
import './Card.css'
import {useState} from "react"
export default function Card(props){
    const [data,setData] = useState(props)
    
    return(
    <div className="card">
        <div className="body">
            <h1 className="card_name">{props.name_of_card}</h1>
            <video className="card_video" src={props.video} controls type="video/mp3"></video>
            <h2 className="card_bucket">Category : {props.category}</h2>
        </div>
        <button className="card_button" onClick={()=>{
            let name = prompt('enter the new name : ')
            let link = prompt('enter the new video link : ')
            let bucket = prompt('enter the new category name : ')

        }}>EDIT</button>
    </div>)
} */