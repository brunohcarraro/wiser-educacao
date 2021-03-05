import React, { Component, useState } from 'react';
import styled from 'styled-components';
import api from '../api/api';
import ContainerLeft from '../components/ContainerLeft';
import MainContent from '../components/MainContent';
import HeaderInfo from '../components/HeaderInfo';
import FormLogin from '../components/FormLogin';

export default class extends Component<any, any>  {
	constructor(props) {
	    super(props);
	    this.state = {
	      email: '',
	      password: ''    
	    };
	}

	handleLogin = () => {
		console.log("Email: " + this.state.email);
		console.log("Senha: " + this.state.password);
		// Resp for autentication
		let resp_auth = api.get("/login").then((response) => {

	      	response.data.forEach((obj) => {

                if (obj.email == "brunocrro@hotmail.com" && obj.password == "@Bruno20211+") {
                	alert('foi porra');
                }else{
                	alert('não foi');
                }
            });

	      }).catch((err) => {
	        
	        console.error("ops! ocorreu um erro" + err);

	     });
	}	

	render () {
		return (
			<>
				<ContainerLeft></ContainerLeft>
				<MainContent>
					<HeaderInfo>
						<h1 onClick={(e) => this.handleLogin()}>Olá, seja bem-vindo!</h1>
					</HeaderInfo>
					<FormLogin>
						<input type="text" onChange={(e) =>this.setState({email: e.target.value})} />
						<input type="password" onChange={(e) =>this.setState({password: e.target.value})} />
					</FormLogin>
				</MainContent>
			</>
    	)
 	}
}