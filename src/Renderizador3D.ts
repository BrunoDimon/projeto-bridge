import Renderizador from "./Renderizador";

export default class Renderizador3D implements Renderizador {
    renderizarForma(nome: string): void {
        console.log(`Renderizando ${nome} em 3D.`);
    }
}