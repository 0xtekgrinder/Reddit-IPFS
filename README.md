# Reddit-IPFS

Reddit IPFS is a PoC of a the famous social network Reddit built only using distributed storage. It is not meant for production and is only inteded to proove that a Minimum Viable Product can works good and fast.

## Features

This PoC have:

- An API use to interact with plebbit (The documentation can be found in the get route docs)
- A front-end serverless done in ReactTS recreating a simple functionnal reddit
- Three different scripts helping creating a fake dataset used for the PoC in nodejs

## Data Structure

We use IPFS and IPNS to create the data structure with so far not a recursive data structure like Reddit does for comments of comments etc ...

Here is a schema of how it works:

<div align="center">
  <img src=".github/assets/dataStructureSchema.png" width="80%" />
</div>

The IPFS ID is the key we use to create a IPNS file to have a one and only file

## API

### Get started

To install this project, you're going to need [NodeJS](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) and [Kubo](https://github.com/ipfs/kubo)

You need to execute the command bellow inside api directory

  yarn install

Then you can launch the ipfs node with:

  ipfs daemon

And finally launch the API using the command bellow inside the api directory:

  yarn build
  yarn start

Or you can simply use the docker-compose by this command:

  docker-compose up

### Environement

- __`IPFS_API`__      Define the __URL__ of the IPFS __Node__ used
- __`REDDIT_KEY`__      Define the __IPFS KEY__ of the __Reddit__
- __`REDDIT_CID`__      Define the __IPFS CID__ of the __Reddit__

## Scripts

### Get started

To install this project, you're going to need the api running

You need to execute the command bellow inside scripts directory

  yarn install

And then you can launch the script that you wants by using the command bellow inside the scripts directory:

  yarn subs
  yarn posts
  yarn comments