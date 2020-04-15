  const descripccion = {
      demand: true,
      alias: 'd',
      desc: 'Descripccion de la tarea por hacer'
  }

  const completado = {
      default: true,
      alias: 'c',
      desc: 'Marca como completado o pendiente la tarea'
  }

  const argv = require('yargs')
      .command('crear', 'Crear un elemento por hacer', { descripccion })
      .command('actualizar', 'Actualiza el estado de una tarea', { descripccion, completado })
      .command('borrar', 'Borra una tarea', { descripccion })
      .help()
      .argv;




  module.exports = { argv }