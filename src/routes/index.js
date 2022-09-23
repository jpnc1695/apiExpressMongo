import express from "express";
import links from './linksRoutes.js'
import tags from './tagsRoutes.js'

const routes = (app) => {
  app.route('/').get((req,res)=> {
    res.status(200).send({titulo:'Requisição feita.'})
  })

  app.use(
    express.json(),
    links,
    tags
  )
}

export default routes

