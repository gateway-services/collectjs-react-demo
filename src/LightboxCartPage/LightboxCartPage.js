import React from 'react';
import {Link} from "react-router-dom";

export default class LightboxCartPage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      amount: '',
      isSubmitting: false,
      alertMessage: '',
    };
    this.setState = this.setState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.finishSubmit = this.finishSubmit.bind(this);
  }

  componentDidMount() {
    window.CollectJS.configure({
      variant: 'lightbox',
      callback: (token) => {
        console.log(token);
        this.finishSubmit(token);
      }
    });
  }

  finishSubmit(response) {
    const { isSubmitting, alertMessage, ...formData } = { ...this.state };
    formData.token = response.token;
    console.log(formData);
    this.setState({ isSubmitting: false, alertMessage: 'The form was submitted. Check the console to see the output data.' });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    window.CollectJS.startPaymentRequest();
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Lightbox Cart Page</h1>
          <Link to="/inline">Inline Cart Page</Link>
          <br />
          <Link to="/">Home page</Link>
        </div>
        <br />
        { this.state.alertMessage && (
          <div className="alert">
            {this.state.alertMessage}
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={event => this.setState({ firstName: event.target.value })}
              value={this.state.firstName}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={event => this.setState({ lastName: event.target.value })}
              value={this.state.lastName}
            />
          </div>
          <div>
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              onChange={event => this.setState({ amount: event.target.value })}
              value={this.state.amount}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={this.state.isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
