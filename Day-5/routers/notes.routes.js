const {createNotes,getAllNotes,getNote,getUpdateById,deletedNote,updateNote}=require("../controllers/notes.controller")

const express=require('express')
const router=express.Router()

router.post('/create', createNotes)
router.get('/', getAllNotes)
router.get('/:id', getNote)
router.put('/:id', getUpdateById)
router.delete('/:id', deletedNote)
router.put("/:id", updateNote)
module.exports=router