let adm = true;

function verificarAcesso(usuario) {
    if (adm && usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

let usuario = { nome: "João", admin: true };
verificarAcesso(usuario);
