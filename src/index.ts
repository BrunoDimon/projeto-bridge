import Renderizador2D from './Renderizador2D';
import Renderizador3D from './Renderizador3D';
import Circulo from './Circulo';
import Quadrado from './Quadrado';

const renderizador2D = new Renderizador2D();
const renderizador3D = new Renderizador3D();

const circulo2D = new Circulo(renderizador2D);
const circulo3D = new Circulo(renderizador3D);
const quadrado2D = new Quadrado(renderizador2D);
const quadrado3D = new Quadrado(renderizador3D);

circulo2D.renderizar();
circulo3D.renderizar();
quadrado2D.renderizar();
quadrado3D.renderizar();