import React from 'react';
import Image from 'next/image';
import {useState} from 'react';
import axios from 'axios';

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        //event.preventDefault();

        const userPayload = {
            username,
            password
        }

        console.log('Payload: ', userPayload)

        //TODO: Send data over server

        try{
            const {data} = await axios({
                url:'/api/loginapi',
                method:'POST',
                data: userPayload
            });

            console.log('Response Back: ', data);
        } catch (error) {
            console.log('Error: ', error);
        }

    }
        return (
            <div>
                <h1>Log In</h1>
                <form action="../api/loginapi" method="post">
                    <div>
                        <p>
                        <label htmlFor="username"><b>Username: </b></label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={({target})=>setUsername(target?.value)}
                            name="username"
                            id="username"
                            required
                        />
                        </p>

                        <p>
                        <label htmlFor='password'><b>Password: </b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={({target})=>setPassword(target?.value)}
                            name="password"
                            id="password"
                            required
                        />
                        </p>

                        <p>
                        <button onClick={handleSubmit} type="submit">
                            Login
                        </button>
                        </p>
                    </div>
                </form>
            </div>
        );
    };