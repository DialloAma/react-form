import React, { Component } from 'react'
class ClassForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            informations:[],
               name: "",
                email: "",
                password: "",
            
        }
    }
    handleChange=(e)=>{
     e.preventDefault();
     this.setState({ [e.target.name]: e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const Newinfo={
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        this.setState({
        
            informations: [...this.state.informations,Newinfo],
            name: "",
            email: "",
            password: "",
        })
 
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} style={{textAlign: "center",padding:"20px"}}>
                    <label>Name :
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} style={{marginBottom:"10px"}} required/>
                    </label>
                    <br />
                    <label>Email : </label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} style={{marginBottom:"10px"}} required/>
                    <br />
                    <label>Password : </label>
                    <input type="Password" name="password" value={this.state.password} onChange={this.handleChange} style={{marginBottom:"10px"}} required/>
                    <br />
                    <input type="submit" name="Submit" />

                </form>
                {this.state.informations.map((item,index)=>{
                    return(
                        <div key={index} style={{paddingLeft:"20px"}}>
                            <h3>Name : {item.name}</h3>
                            <h3>Email : {item.email}</h3>
                            <h3>Password : {item.password}</h3>
                            <hr/>
                        </div>
                    )
                })}
            </>
        )
    }
}
export default ClassForm