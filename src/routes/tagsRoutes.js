import express from "express";
import tagsController from "../controllers/tagsController.js";

const router = express.Router();

router.get("/tags" , tagsController.listarTags);
router.get("/tags/:id", tagsController.listarTagPorId);

router.post('/tags', tagsController.criarTag);
router.put('/tags/:id', tagsController.atualizarTag);

router.delete('/tags/:id', tagsController.excluirTag);


export default router