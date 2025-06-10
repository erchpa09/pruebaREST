const express = require('express')
const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log('Acplicacion corriendo en puerto ${port} PORT');
})