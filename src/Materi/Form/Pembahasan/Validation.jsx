import React from "react";
const Input = ({label, type, name, onChange}) => {
    return (
        <div>
        <label> {label} :</label>
        <br />
        <Input type={type} name={name} onChange={e=>onChange(e.target.value)}/>
        <br/>
        </div>
    )
}

class Validation extends React.Component {
    state = {
        username : '',
        password : '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render () {
        const style = {
            width : '400px',
            margin : '100px auto 0',
            border : '1px solid black',
            padding : '10px'


        }

       return (
        <div style={style}>
            <h4>Login Page</h4>
           <form onSubmit={this.handleSubmit}>
               <Input type='text' name="username" label='Username' onChange={value => this.setState({username :value})}/>
               <Input type='password' name="password" label='Password' onChange={value => this.setState({password :value})}/>
               
           </form>

           <button type="submit">login</button>
        </div>
       )
    }
}

export default Validation