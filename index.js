/**  */

function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'Usuaroi',
      dataNascimento: new Date()
    });
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(function(){
    return callback(null, {
      telefone: '92823191',
      ddd: 11
    });
  }, 1000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function(){
    return callback(null, {
      rua: 'Rua Fulano de Tal',
      numero: 19
    });
  }, 1000);
}

function resolverUsuario(error, usuario){
  console.log('usuario', usuario);
}

obterUsuario(function revolverUsuario(error, usuario){
  // null || "" || 0 === false
  if (error) {
    console.log("ERROR", error);
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
    if (error) {
      console.log("ERROR", error);
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
      if (error) {
        console.log("ERROR", error);
      }

      console.log(`
        Nome: ${usuario.nome},
        Telefone: ${telefone.ddd} ${telefone.telefone},
        Endereco: ${endereco.rua} ${endereco.numero}
      `);
    });
  });
});

// const usuario = obterUsuario();
// const telefone = obterTelefone(usuario.id);
// const endereco = obterTelefone(usuario.id);

// console.log(usuario, telefone, endereco);