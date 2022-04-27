const { Repair } = require( '../models/repairs' )

const repairExist = async ( req, res, next ) => {

    try {

        const { id } = req.params

        const repair = await Repair.findOne( { where: { status: 'pending' } } )

        if( !repair ){
            return res.status( 404 ).json( {
                status: 'Error code 2',
                message: 'Repair is not pending'
            } )
        }
        
    } catch (error) {

        console.log(error)

    }

}


module.exports = { repairExist }