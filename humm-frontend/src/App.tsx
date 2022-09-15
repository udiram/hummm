import React, { Component } from "react";
import logo from "./images/logo/2x/humm_logo@2x.png";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./navbar";
import ChatWindow from "./chat-window";

interface AppProps {}

interface AppState {}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main className="vh-50">
        <Navbar />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 d-flex justify-content-center">
            <img className="my-2 img-fluid" src={logo}></img>
          </div>
          <div className="col-4"></div>
        </div>
        <ChatWindow></ChatWindow>
      </main>
    );
  }
}

export default App;
    };

    this.state.messages.push(message);
    this.setState({ messages: this.state.messages });

    axios
      .post("http://localhost:8000/bot_analysis/", message)
      .then((res) => {
        let response_text = res.data;
        let response: message = {
          text_contents: response_text,
          text_date: new Date().toISOString(),
          text_author: 'bot',
        }
        this.state.messages.push(response);
        this.setState({ messages: this.state.messages });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <main className="container">
        <h1>Humm Chatbot</h1>
        <div className="messages">
          {this.state.messages.map((message) => {
            return (
              <div key={message.text_date}>
                {message.text_author + ": " + message.text_contents}
              </div>
            );
          })}
        </div>
        <form onSubmit={(event) => this.sendMessage(event)}>
          <input type="text" name="message"></input>
          <input type="submit"></input>
        </form>
      </main>
    );
  }
}

export default App;
