const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('knex')
const bcrypt = require('bcrypt');
const { handleRegister } = require('./controllers/register');
const { handleSignIn } = require('./controllers/signin');
const { handleProfile } = require('./controllers/profile');
const { handleImage } = require('./controllers/image');
// const { handleAPIFaceDetection } = require('./controllers/APIFaceDetection');
import { handleAPIFaceDetection } from './controllers/APIFaceDetection';


const db = knex({
    client: 'pg',
    connection: {
      host : 'dpg-ckd9tsdjhfbs73dsst80-a',   //localhost
      port : 5432,
      user : 'msimarro',
      password : '3pH9myKRo0SYmTjZhxqwX8u6cEFc8ogL',
      database : 'dbfacedetection'
    }
  });

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())


app.get('/', (req, res) => {res.send('sucess')})

app.post('/signin', (req, res) => {handleSignIn(req, res, db, bcrypt)})

app.post('/register', (req, res) => {handleRegister(req, res, db, bcrypt)})

app.get('/profile/:id',(req, res) => {handleProfile(req, res, db)}  )

app.put('/image', (req, res) => {handleImage(req, res, db)})

app.post('/APIFaceDetection', (req, res) => {handleAPIFaceDetection(req, res)});


app.listen(3000, () => {console.log('app is running on port 3000')})

