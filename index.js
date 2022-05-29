/**  */

function obterUsuario() {
  setTimeout(function () {
    return {
      id: 1,
      nome: 'Usuaroi',
      dataNascimento: new Date()
    }
  }, 1000)
}

function obterTelefone(idUsuario) {
  setTimeout(function(){
    return {
      telefone: '92823191',
      ddd: 11
    }
  }, 2000);
}

function obterEndereco(idUsuario) {
  setTimeout(function(){
    return {
      rua: 'Rua Fulano de Tal',
      numero: 19
    }
  }, 2000);
}

const usuario = obterUsuario();
const telefone = obterTelefone(usuario.id);
const endereco = obterTelefone(usuario.id);

console.log(usuario, telefone, endereco);