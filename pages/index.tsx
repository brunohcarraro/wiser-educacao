import React, { Component, useState } from 'react';
import styled from 'styled-components';
import api from '../api/api';
import ContainerLeft from '../components/ContainerLeft';
import MainContent from '../components/MainContent';
import HeaderInfo from '../components/HeaderInfo';
import FormLogin from '../components/FormLogin';
import Input from '../components/Input';
import Button from '../components/Button';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { createGlobalStyle } from 'styled-components';
import validator from 'validator';
import ButtonLoader from "../components/ButtonLoader";

const GlobalStyle = createGlobalStyle`
	@import 					url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
	body						{margin: 0 !important; font-family: 'Montserrat', sans-serif; background: #FAF5FF}
	h1							{color: #383E71; font-style: normal; font-size: 46px; font-weight: 400;}
	h3							{font-size: 20px; color: #989FDB; font-style: normal; font-weight: 600; }
	label 						{color: #383E71; padding-left: 15px; text-transform: uppercase; display: block; margin-bottom: 15px;}
	p.forget 					{font-weight: 400; font-size: 17px; line-height: 20px; text-align: center; color: #989FDB; margin-top: 60px; padding: 0px 50px;}
	p.forget a 					{text-decoration: underline; color: #9D25B0; cursor: pointer}
	.rodal-dialog 				{border-radius: 10px; background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);}
	.rodal-dialog h2 			{color: #fff; text-align: center; padding: 30px 20px; font-size: 30px; font-weight: 400;}
	label.error 				{color: #FF377F; text-transform: inherit !important; margin-top: -15px; margin-bottom: 25px}
	.button:disabled 			{opacity: 0.5;}
	@media(max-width: 1200px)	{ h1 {font-size: 38px;} h3 {font-size: 16px;} }
	@media(max-width: 768px)	{ label {padding-left: 0px;} body{ background: #130525;} }
	@media(max-width: 540px)	{ h1 {font-size: 24px;} }
`

export default class extends Component<any, any>  {

	constructor(props) {
	    super(props);
	    this.state = {
    		loading: false,
			error: false,
			visible: false,
			testLogin: '',
			emailError: '',
			passError: false,
			textError: false,
			email: '',
			password: ''    
	    };
	}

	validateEmail = (e) => { 
	    var email = e.target.value 
	  
	    if (validator.isEmail(email)) { 
	      this.setState({emailError: 'v??lido'});
	      this.setState({email: email});
	    } else { 
	      this.setState({emailError: 'inv??lido'});
	    } 
	} 

	handleLogin = () => {
		this.setState({ loading: true });
		this.setState({erro: false});
		this.setState({passError: false});
		this.setState({textError: false});
		console.log("Email V??lido? " + this.state.emailError);
		console.log("Email: " + this.state.email);
		console.log("Senha: " + this.state.password);

		if (this.state.emailError == "inv??lido") {
			this.setState({erro: true});
			this.setState({ loading: false });
			return;
		}else if(this.state.email == ""){
			this.setState({textError: true});
			this.setState({ loading: false });
			return;
		}else if(this.state.password == ""){
			this.setState({passError: true});
			this.setState({ loading: false });
			return;
		}else{
			// Resp for autentication
			let resp_auth = api.get("/login").then((response) => {

		      	response.data.forEach((obj) => {
	                if (obj.email == this.state.email && obj.password == this.state.password) {
	                	this.setState({textLogin: "Login efetuado com sucesso!"});
	                	this.setState({visible: true});
						this.setState({ loading: false });
	                }else{
	                	this.setState({textLogin: "Login incorreto"});
	                	this.setState({visible: true});
						this.setState({ loading: false });
	                }
	            });

		      }).catch((err) => {

            	this.setState({textLogin: "Ocorreu um erro, tente novamente."});
            	this.setState({visible: true});

				this.setState({ loading: false });

		     });
		}
	}	

	isEmail = (val) => {
	    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    if(!regEmail.test(val)){
	      return 'Invalid Email';
	    }
	}

	validate = (text) => {
		this.isEmail(text);
	}

	hide() {
        this.setState({ visible: false });
    }

	render () {
		const { loading } = this.state;
		return (
			<>
				<GlobalStyle />
				<Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <h2>{this.state.textLogin}</h2>
                </Rodal>
				<ContainerLeft></ContainerLeft>
				<MainContent>
					<HeaderInfo>
						<h1>Ol??, seja bem-vindo!</h1>
						<h3>Para acessar a plataforma, fa??a seu login.</h3>
					</HeaderInfo>
					<FormLogin>
						<label htmlFor={"email"}>E-mail</label>
						<Input color={this.state.erro ? "red" : "black"} type="text" onChange={(e) => this.validateEmail(e)} id="email" placeholder="user.name@email.com" />
						{this.state.erro &&
							<label className="error">Digite um e-mail v??lido.</label>
						}
						{this.state.textError &&
							<label className="error">Preencha seu e-mail.</label>
						}
						<label htmlFor={"pass"}>Senha</label>
						<Input type="password" onChange={(e) =>this.setState({password: e.target.value})} id="pass" placeholder="*******" />
						{this.state.passError &&
							<label className="error">Digite uma senha.</label>
						}
						<Button className="button" onClick={(e) => this.handleLogin()} disabled={loading}>
							{loading && <span>Acessando...</span>}
							{!loading && <span>Entrar</span>}
				        </Button>
						<p className="forget">Esqueceu seu login ou senha? <span>Clique <a>aqui</a></span></p>
					</FormLogin>
				</MainContent>
			</>
    	)
 	}
}