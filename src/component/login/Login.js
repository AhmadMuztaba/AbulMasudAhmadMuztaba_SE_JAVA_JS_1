import React, { Component } from 'react';
class Login extends Component {
    state={email:'',password:''}
    render() {
        return (
            <section className="login">
                <div className="login__design">
                    <span className="login--log">Log</span>
                    <span className="login--in">In</span>
                </div>
                <div className="login__form">
                    <form className="login--form" onSubmit={(e)=>{
                        e.preventDefault();
                        if(this.state.password.length<=0){
                            alert('password cant be empty');
                        }
                        alert('sorry,this page is not connected to the backend');
                    }}>
                        <label className="login--form--label" for="Email">Email</label>
                        <input type="email" className="login--form--input" name="email" id="email" required autocomplete="off" value={this.state.email}
                        onChange={(e)=>{
                            this.setState({email:e.target.value});
                        }} />
                        <label className="login--form--label" for="password"  >password</label>
                        <input type="password" className="login--form--input" name="password" value={this.state.password} onChange={(e)=>{
                            this.setState({password:e.target.value});
                        }}required id="password" />
                        <button type="submit" className="btn btn-lg btn--form-login" >Login</button>
                    </form>
                    <a className="btn btn--googleAuth" href="" role="button">
                        <div className="margin-3-px">
                            <i className="fab fa-google "></i>
                        </div>
                        Sign In with Google
                    </a>
                </div>
            </section>
        );
    }
}

export default Login;