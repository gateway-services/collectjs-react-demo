import React from 'react';
import CollectJSSection from "./CollectJSSection";
import {Link} from "react-router-dom";

class InlineCartPage extends React.Component {
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
      variant: 'inline',
      styleSniffer: true,
      callback: (token) => {
        console.log(token);
        this.finishSubmit(token)
      },
      fields: {
        ccnumber: {
          placeholder: 'CC Number',
          selector: '#ccnumber'
        },
        ccexp: {
          placeholder: 'CC Expiration',
          selector: '#ccexp'
        },
        cvv: {
          placeholder: 'CVV',
          selector: '#cvv'
        }
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
          <h1>Cart Page</h1>
          <Link to="/">Home Page</Link>
          <br />
          <Link to="/lightbox">Lightbox cart page</Link>
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
          <CollectJSSection />
          <button
            type="submit"
            disabled={this.state.isSubmitting}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default InlineCartPage;
