// #01.5 - Como funcionam os types

interface IAnimal{
    nome: string, 
    tipo: "terrestre" | "aquático";
    domestico: boolean
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: "pequeno" | "médio" | "grande"
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: "Cachorro",
    porte: "médio",
    tipo: "terrestre",
}