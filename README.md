# scopedia MERN social media app

> eminbasol-2023
> Social media platform built with the MERN stack & Redux & Material UI.


![screenshot](https://github.com/eminbasol/mern-social-media/blob/main/ss/ss1.png)

## Features

- Responsive Dark/Light Mode
- Post with image or just some text
- Post like and comments
- Profile with posts & friend list
- Post image uploaded with multer
- Add/remove friend


### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 3001
MONGO_URI = your mongodb uri
JWT_SECRET = 'somejwt123'
```

### Install Dependencies (frontend & backend)

```
cd server
npm install
cd ../client
npm install
```

### Run

```
# Run frontend 
cd client && npm run start

# Run backend 
cd server && npm run server
```

### Build 

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands in server/index.js to seed the database with some sample users and posts.

```
# Import data one time
User.insertMany(users);
Post.insertMany(posts);
```


### Note

The project continues to be developed.

