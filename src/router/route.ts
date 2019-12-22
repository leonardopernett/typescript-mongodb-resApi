import {Router } from 'express'

import  indexController from '../controllers/indexController'

class IndexRouter {
   public router:Router = Router()

   constructor(){
       this.rutas()
   }

     rutas(){
      this.router.get('/', indexController.getList) 
      
   }
}

const indexRouter = new IndexRouter()

export default indexRouter.router