import links from '../models/Link.js'

class LinksController {

  static listarLinks = (req,res) => {
      links.find()
           .populate('tag')
           .exec((err, links)=>{
              res.status(200).json(links)
           })
  }
  
  static listarLinkPorId = (req, res) => {
    const {id} = req.params

    links.findById(id)
         .populate('tag','valor')  
         .exec((error, livro) => {
              if(!error) {
                res.status(200).send(livro)
              }else{
                res.status(400).send({message: `${error.message} - ID não encontrado`})
              }
          })
  }

  static criarLink = (req, res) => {
    let link = new links(req.body);

    link.save((error) => {
      if(!error){
        res.status(201).send(link.toJSON())
      }else{
        res.status(500).send({message:`${error.message} - Erro no cadastro do link`})
      }
    })
  }
  
  static atualizarLink = (req, res) => {
    const{id} = req.params;

    links.findByIdAndUpdate(id, {$set: req.body},(error) => {
      if(!error){
        res.status(200).send({message:'Livro atualizado com sucesso'})
      }else{
        res.status(500).send({message:`${error.message} - Erro ao atualizar link.`})
      }
    })
  }

  static excluirLink = (req, res) => {
    const {id} = req.params

    links.findByIdAndDelete(id, (error) => {
      if(!error) {
        res.status(200).send({message: 'Livro removido com sucesso'})
      }else {
        res.status(500).send({message: error.message})
      }
    })
  }

  static listarLinkPorTag = (req, res) => {
    const tag = req.query.tag

    links.find({'tag': tag}, {}, (error, links) => {
      if(!error){
        res.status(200).send(links)
      }else{
        res.status(500).send({message: error.message})
      }
    })
  }
}

export default LinksController