import Head from 'next/head';
import React from 'react';

export default class SignUpComponent extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Sign Up</title>
                </Head>
                <div>
                    <form method="post" action="../api/signupapi">
                        <div>
                            <h1>Sign Up</h1>
                            <p>
                            <label htmlFor="username"><b>Username: </b></label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                name="username"
                                id="username"
                                required
                            />
                            </p>

                            <p>
                            <label htmlFor="password"><b>Password: </b></label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                id="password"
                                required
                            />
                            </p>

                            <p>
                            <label htmlFor="passwordrepeat"><b>Repeat Password: </b></label>
                            <input
                                type="password"
                                placeholder="Repeat Password"
                                name="passwordrepeat"
                                id="passwordrepeat"
                                required
                            />
                            </p>

                            <p>
                            <div>
                                <button 
                                    type="submit" 
                                >
                                        Register
                                </button>    
                            </div>
                            </p>                            
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}