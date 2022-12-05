import dotenv from 'dotenv';
import { create } from 'ipfs-http-client';
dotenv.config();

const ipfs = create({
    url: process.env.IPFS_API,
})

export default ipfs;