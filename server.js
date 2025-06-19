const CONFIG = require('./app/config/configuracion')
const app = require('./app/app')
const conexion = require('./app/config/conexion')

conexion.connect()

app.listen(CONFIG.PORT,()=>{
    console.log('Acplicacion corriendo en puerto', CONFIG.PORT);
})