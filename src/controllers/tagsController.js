import tags from '../models/Tags.js'

class TagsController {

  static listarTags = (req,res) => {
      tags.find((err, tags)=>{
        res.status(200).json(tags)
      })
  }
  
  static listarTagPorId = (req, res) => {
    const {id} = req.params

    tags.findById(id, (error, tag) => {
        if(!error) {
          res.status(200).send(tag)
        }else{
          res.status(400).send({message: `${error.message} - ID não encontrado`})
        }
    })
  }

  static criarTag = (req, res) => {
    let tag = new tags(req.body);

    tag.save((error) => {
      if(!error){
        res.status(201).send(tag.toJSON())
      }else{
        res.status(500).send({message:`${error.message} - Erro no cadastro da tag`})
      }
    })
  }
  
  static atualizarTag = (req, res) => {
    const{id} = req.params;

    tags.findByIdAndUpdate(id, {$set: req.body},(error) => {
      if(!error){
        res.status(200).send({message:'Tah atualizada com sucesso'})
      }else{
        res.status(500).send({message:`${error.message} - Erro ao atualizar tag.`})
      }
    })
  }

  static excluirTag = (req, res) => {
    const {id} = req.params

    tags.findByIdAndDelete(id, (error) => {
      if(!error) {
        res.status(200).send({message:'Tag removida com sucesso'})
      }else {
        res.status(500).send({message: error.message})
      }
    })
  }
}

export default TagsController