import express from 'express';
import authapp from './server/api/routes/Router';


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const basePath = '/api/v1';


app.use(basePath, authapp);

app.listen(process.env.PORT || 3000,function(){
    console.log('server is running on port 3000');
  });
  export default app;