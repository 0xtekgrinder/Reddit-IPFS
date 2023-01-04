import dotenv from 'dotenv';
import { create } from 'ipfs-http-client';
dotenv.config();

// Create the ipfs configuration from the already running ipfs node
const ipfs = create({
    url: process.env.IPFS_API,
})

export default ipfs;