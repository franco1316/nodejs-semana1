const express = require( 'express' )

const { repairExist } = require( '../middlewares/repairs' )

const {
    getPendingRepairs,
    getPendingRepairsById,
    postRepair,
    updateRepair,
    deleteRepair
} 

    = require( '../controllers/repairs' )


const router = express.Router()

router
    .route( '/' )
        .get( getPendingRepairs )
        .post( postRepair )


router
    .route( '/:id' )
        .get( repairExist, getPendingRepairsById )
        .patch( repairExist, updateRepair )
        .delete( repairExist, deleteRepair )



module.exports = { repairs: router }
