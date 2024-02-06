// this is class base component
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Userinfo:{
                name:"name",
                avatar_url:"",
                giturl:"",
                location:"default"
            }
        }
    }
     async componentDidMount(){
        const data= await fetch("https://api.github.com/users/Vis01")
        
        const json= await data.json();
        this.setState({
            Userinfo:json,
        })
        console.log(json);
    }

    render(){
        const {name,location,avatar_url}=this.state.Userinfo;

        return(
            <div className="flex justify-center" >
                <div className=" ml-9 flex  border-solid border-2 border-sky-500 rounded-lg " >
                <img className="w-48 rounded-lg"  src={avatar_url} />
                <div className="ml-9">
                <h1 className="Text-2xl font-bold"> {name}</h1>
                <h2>{location}</h2>
                </div>
                
            </div>
            </div>
            


    );
}
}
export default UserClass;