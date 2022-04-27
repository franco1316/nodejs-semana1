const { Repair } = require( '../models/repairs' )


const getPendingRepairs = async ( req, res ) => {
 
    try {

        const repairs = await Repair.findAll( { where : { status: 'pending' } } )

        res.status( 200 ).json( { repairs } )
        
    } catch (error) {
        
        console.log(error)

    }

}


const getPendingRepairsById = async ( req, res ) => {

    try {

        const { repair } = req

        const repairs = await repair.findAll( { where : { status: 'pending' } } )

        res.status( 200 ).json( { repairs } )
        
    } catch (error) {
        
        console.log(error)

    }

}


const postRepair = async ( req, res ) => {

    try {

        const { date } = req.body

        const newRepair = await Repair.create( { date } )

            newRepair.update( { userId: req.body.id } )

        res.status( 201 ).json( { newRepair } )
        
    } catch (error) {

        console.log(error)
        
    }

}


const updateRepair = async ( req, res ) => {

    try {

        const { repair } = req
        const { date, userId } = req.body
        
        await repair.update( { date, userId } )

        res.status( 200 ).json( { status: 'completed' } )
        
    } catch (error) {
        
        console.log(error)

    }

}


const deleteRepair = async ( req, res ) => {

    try {

        const { repair } = req

        await repair.update( { status: 'cancelled' } )

        res.status( 200 ).json( { status: 'success' } )
        
    } catch (error) {
        
        console.log(error)

    }

}



module.exports = {
    getPendingRepairs,
    getPendingRepairsById,
    postRepair,
    updateRepair,
    deleteRepair
}