import React from 'react';
import './AddCardPage.css';
import logo from '../../assets/credlogobw.png';
import LoadingDots from '../CustomMaterialUI/LoadingDots/LoadingDots';

interface AddCardPageProps {
  navigate: (path: string) => void;
}

interface AddCardPageState {
  newCardNumber: string[];
  message: string | null;
  connectingToBackend: boolean;
}

class AddCardPage extends React.Component<AddCardPageProps, AddCardPageState> {
  state: AddCardPageState = {
    newCardNumber: [],
    message: null,
    connectingToBackend: false,
  };

  componentDidMount() {
    console.log("From initial:" + this.state.newCardNumber.toString());
  }

  render() {
    console.log("rendering...");
    return (
      <div className="add-card-container">
        <div className="add-card-left-container">
          <p id="add-your-card-title">Add your card</p>
        </div>
        <div className="add-card-right-container">
          <img src={logo} id="cred-logo-in-add-card" alt="cred logo" />
          <div className="enter-card-no-section">
            <p>Please enter your credit card number</p>
            <div className="card-no">
              {/* Your input fields */}
            </div>
            <span id="message">{this.state.message}</span>
            <button
              id="add-card-btn"
              onClick={() => this.handleAddCard()}
              disabled={this.state.connectingToBackend}
            >
              {this.state.connectingToBackend ? <LoadingDots /> : 'Add card'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  shiftFocus = (current: string, next: string) => {
    const currentElement = document.getElementById(current) as HTMLInputElement;
    if (currentElement && currentElement.value) {
      const nextElement = document.getElementById(next) as HTMLInputElement;
      nextElement?.focus();
    }
  };

  handleInputChange = (index: number, value: string) => {
    const cardNumber = [...this.state.newCardNumber];
    cardNumber[index] = value;
    this.setState({ newCardNumber: cardNumber });
  };

  handleAddCard = () => {
    console.log("Button clicked");
    const cardNumberStr = this.state.newCardNumber.join('');

    if (cardNumberStr.length === 16) {
      console.log("From handle Add card in AddCardComponent: " + cardNumberStr);
      this.setState({ connectingToBackend: true });

      fetch('http://localhost:8080/api/addCard', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'cardNumber': cardNumberStr }),
      })
      .then(response => {
        if (response.status === 200) {
          this.setState({ message: 'Card Added', connectingToBackend: false });
        } else if (response.status === 400) {
          response.json()
            .then(json => this.setState({ message: json.messageString, connectingToBackend: false }));
        } else if (response.status === 403) {
          this.props.navigate("/authenticate");
        }
      })
      .catch(() => this.setState({ message: 'Something went wrong. Please try again!', connectingToBackend: false }));
    } else {
      this.setState({ message: 'Card number should be 16 digits long' });
    }
  };
}

export default AddCardPage;
