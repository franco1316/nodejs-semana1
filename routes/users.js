const express = require( 'express' )

const { userExist } = require( '../middlewares/users' )

const {
    getAllUsers,
    getUserById,
    postUser,
    updateUser,
    deleteUser
}

    = require( '../controllers/users' )
    
    
const router = express.Router()

router
    .route( '/' )
        .get( getAllUsers )
        .post( postUser )

router
    .route( '/:id' )
        .get( userExist, getUserById )
        .patch( userExist, updateUser )
        .delete( userExist, deleteUser )


module.exports = { users: router }