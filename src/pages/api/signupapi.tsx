import { NextApiRequest, NextApiResponse } from 'next/types';
//import { createUserTable } from '../../lib/ddbOperations'; 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    //createUserTable();
    
    console.log(req);

    const body = req.body;

    console.log('body: ', body);

    if(body.password != body.passwordrepeat){
        res.status(401).send("Invalid password!!");
    }
    
    return res.send('Hello ' + `${body.username}`+ ', your account has been registered!');

    };