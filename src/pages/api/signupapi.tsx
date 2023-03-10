import { NextApiRequest, NextApiResponse } from 'next/types';
//import { createUserTable } from '../../lib/ddbOperations'; 
import {Users} from '../../data/users';
import Link from 'next/link';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    
    try {
        if (req.method !== 'POST') {
            res.status(405).send({message:'Only POST requests allowed'})
            return
        }
        const body = JSON.parse(JSON.stringify(req.body))
        const user = Users.find((user) => user.username === body.username && user.password===parseInt(body.password) && user.password===parseInt(body.passwordrepeat));
        if (user) {
            res.status(404).send('User exists!')
            return
        }

        if(body.password != body.passwordrepeat){
            res.status(401).send("Passwords do not match!");
        }
        
        return res.send('Hello ' + `${body.username}`+ ', your new account has been registered!');
        //Users + [{username: body.username, password: body.password}]
        

    } catch (error) {
        res.status(405).send({message:`{error.message}`})
        return
    }

    };

    export function Logout() {

        const handleSubmit = async (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        return (
            <form action="../api/loginapi" method="post">
                <div>
                    <p>
                        <button onClick={handleSubmit} type="submit">
                            Log Out
                        </button>
                    </p>
                </div>
            </form>
        //     <div>
        //     <p>
        //     <Link href="/index">Log Out</Link>
        //     </p>
        // </div>
        )
        
    }};