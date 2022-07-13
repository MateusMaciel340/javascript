// #01.9 - Utilizando o caracter "?" para variáveis opcionais

interface IUsuario{
    id: string,
    email: string,
    cargo?: "gerente" | "coordenador" | "supervisor" | "funcionario"
}

function redirecione(usuario: IUsuario){
    if(usuario.cargo){
        // redicionar(usuario.cargo);
    }

    // redirecionar para a área do usuário
}