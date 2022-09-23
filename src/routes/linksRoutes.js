import express from "express";
import linksController from "../controllers/linksController.js";

const router = express.Router();

router.get("/links",linksController.listarLinks);
router.get("/links/busca",linksController.listarLinkPorTag )
router.get("/links/:id", linksController.listarLinkPorId);

router.post('/links', linksController.criarLink);
router.put('/links/:id', linksController.atualizarLink);

router.delete('/links/:id', linksController.excluirLink);


export default router
