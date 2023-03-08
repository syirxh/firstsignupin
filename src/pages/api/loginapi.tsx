import { NextApiRequest, NextApiResponse } from 'next/types';
import {signOut} from 'next-auth/react';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;

    console.log('body: ', body);

    return res.send('Hello ' + `${body.username}`+ ', you have been signed in!');
    
    };