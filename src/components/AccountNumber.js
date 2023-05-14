import React from "react";


export default class AccountNumber extends React.Component {
  state = {
    loading: true,
    number: null
  };

  async componentDidMount() {
    const url = "https://api.multiversx.com/accounts/count";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ number: data, loading: false });
    console.log(this.state);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.number) {
      return <div>didn't get number</div>;
    }

    return (
      <p className="account-number">
        {this.state.number
        .toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
      </p>
    );
  }
}