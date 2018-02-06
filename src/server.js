import express from 'express'
import graphql from 'graphql'
import expressGraphQL from 'express-graphql'
import schema from './schema'

const app = express();



app.get('/', (req, res) => {
    res.send(`hello world!`);
});

app.use('/graphql',expressGraphQL({
    schema,
    pretty: true,
})).listen(3000, () =>{
    console.log('GraphQL server running on http://localhost:3000/graphql');
})