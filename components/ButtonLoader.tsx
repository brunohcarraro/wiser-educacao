import React, { Component, useState } from 'react';
import Button from '../components/Button';

export default class ButtonLoader extends Component {
  state = {
    loading: false
  };

  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };

  render() {
    const { loading } = this.state;

    return (
      <div style={{ marginTop: "60px" }}>
        <Button className="button" onClick={this.fetchData} disabled={loading}>
          {loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {loading && <span>Acessando...</span>}
          {!loading && <span>Entrar</span>}
        </Button>
      </div>
    );
  }
}