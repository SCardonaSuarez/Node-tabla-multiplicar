
const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar= false, hasta = 10)=> {

    try{

        let salida, consola = ''
        
        for(let i = 1; i <= hasta; i++){
            salida += `${i} x ${base} = ${i * base}\n`;
            consola += `${i} ${'x'.green} ${base} ${'='.green} ${i * base}\n`;

        }

        if(listar){

            console.log('=========================='.green);
            console.log(`      Tabla del ${base}`.yellow);
            console.log('=========================='.green);
    
            
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `Tabla - ${base}.txt Creada!!`;

    }catch(err){
        throw err
    }    
}

module.exports = {
    crearArchivo 
}