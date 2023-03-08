import React from 'react';
import Link from 'next/link';
// import AWS from 'aws-sdk';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p><Link href="/users/signup">Sign Up</Link></p>
        <p><Link href="/users/login">Log In</Link></p>
      </div>
    );
  };
}