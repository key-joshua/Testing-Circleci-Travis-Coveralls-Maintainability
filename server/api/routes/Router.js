import express from 'express';
const authapp = express.Router();
import XController from '../controllers/Xsignup';
authapp.post('/students', XController.insert)
       .get('/students', XController.retrieve)
       .get('/students/:id', XController.retrieveOne)
       .patch('/students/:id', XController.update)
       .delete('/students/:id', XController.delete);

export default authapp;