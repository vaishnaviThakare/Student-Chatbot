import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut, AmplifyChatbot } from '@aws-amplify/ui-react';
import { Interactions } from 'aws-amplify';

function App() {
  return (
    <div className="App">
       <AmplifySignOut />

       <AmplifyChatbot
    botName="OrderFlowers_dev"
    botTitle="My ChatBot"
    welcomeMessage="Hello, how can I help you?"
  />

     
    </div>
  );
}



export default withAuthenticator(App);