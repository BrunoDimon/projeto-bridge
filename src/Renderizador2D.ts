import Renderizador from "./Renderizador";

export default class Renderizador2D implements Renderizador {
    renderizarForma(nome: string): void {
        console.log(`Renderizando ${nome} em 2D.`);
    }
}