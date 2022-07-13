// #01.8 - Desenvolvendo condicionais a partir de parâmetros

interface IUsuario{
    id: string,
    email: string;
}

interface IAdmin{
    cargo: "gerente" | "coordenador" | "supervisor"
}

function redirecione(usuario: IUsuario | IAdmin){
    if("cargo" in usuario){
        // redirecionar para a área de administração
    }

    // redirecionar para a área do usuário
}