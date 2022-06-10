import Temas from "./Temas";

interface Postagem {

    id: number;
    titulo: string;
    texto: string;
    midia: string;
    data: string;
    curtir: number;
    tema?: Temas | null

}

export default Postagem;