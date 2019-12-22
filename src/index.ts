import express, {Application} from 'express'
import morgan from 'morgan'
import {connect} from 'mongoose'
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'
import router from './router/route'
import routerPost from './router/post'
import routerUser from './router/user'
import compression from 'compression'

class Server  {

   public app: Application = express()

     constructor(){
        this.config()
        this.middleware()
        this.route()
        this.static()
        this.connected()
       
     }

     async connected(){
         connect('mongodb://localhost/resApi',{ 
                 useNewUrlParser: true, 
                 useUnifiedTopology: true,
                 useCreateIndex: true,  })
         console.log('db is connected') 
     }

     config(){
        this.app.set('port', process.env.PORT || 3001)
        this.app.set('views', path.resolve('views'))
        this.app.set('view engine', 'ejs')
     }

     middleware(){
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(compression())
        this.app.use(express.urlencoded({extended:false}))
        this.app.use(express.json())
     }

     route(){
         this.app.use('/api',router)
         this.app.use('/api/posts',routerPost)
         this.app.use('/api/users', routerUser)
         //validar la ruta que no se encuentre
         this.app.use((req,res)=>{
             res.status(404).send('route not found')
         })  
     } 

     static(){
         this.app.use(express.static(path.resolve('public')))
     }

     async start(){
         await this.app.listen(this.app.get('port'))
         console.log('server on port ', this.app.get('port'))
     }
}

const server = new Server()
server.start()
