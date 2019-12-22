import {Request, Response} from 'express'


class IndexController {

    public getList(Req:Request, res:Response){
       res.render('index.ejs')
    }
}

const indexController =  new IndexController()

export default indexController