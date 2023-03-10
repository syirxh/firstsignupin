import { NextApiRequest, NextApiResponse } from 'next/types';
import {signOut} from 'next-auth/react';
import {Users} from '../../data/users';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // const body = req.body;

    // console.log('body: ', body);

    
    try {
        if (req.method !== 'POST') {
            res.status(405).send({message:'Only POST requests allowed'})
            return
        }
        const body = JSON.parse(JSON.stringify(req.body))
        const user = Users.find((user) => user.username === body.username && user.password===parseInt(body.password));
        if (!user) {
            res.status(404).send('User does not exist!')
            return
        }

        //res.status(200).json(user);
        return res.send('Hello ' + `${body.username}`+ ', you have been signed in!');
    } catch (error) {
        res.status(405).send({message:`{error.message}`})
        return
    }

};