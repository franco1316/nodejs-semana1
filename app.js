const express = require( 'express' )

const { users } = require( './routes/users' )
const { repairs } = require( './routes/repairs' )

const { db } = require( './utils/database' )


const app = express()


app.use( express.json() )

app.use( '/api/v1/users', users )
app.use( '/api/v1/repairs', repairs )


db.authenticate()
    .then( () => console.log( 'authenticated' ) )
    .catch( error => console.log(error) )

db.sync()
    .then( () => console.log( 'synced' ) )
    .catch( error => console.log(error) )


const PORT = 4000

app.listen( PORT, () => console.log( 'Listen on port: ' + PORT ) )