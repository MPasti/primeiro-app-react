import psiContos from "../../images/psicanaliseContos.jpg";
import potter from "../../images/harryPotter.jpg";
import berserk1 from "../../images/berserk.jpg";
import edgarPoe from "../../images/poe.jpg";
import eva from "../../images/eva.jpg";
import divina from "../../images/divina.jpg";
import dracula from "../../images/dracula.jpg";
import crimecastigo from "../../images/crimecastigo.jpg";
import onepiece from "../../images/onepiece.jpg";
import coraline from "../../images/coraline.jpg";

export const livros = [
  { key: 1, nome: "a psicanálise dos Contos de Fada", id: 1, src: psiContos },
  { key: 2, nome: "harry Potter e a Pedra Filosofal", id: 2, src: potter },
  { key: 3, nome: "berserk Volume 1", id: 3, src: berserk1 },
  {
    key: 4,
    nome: "edgar Allan Poe: Histórias Extraordinárias",
    id: 4,
    src: edgarPoe,
  },
  { key: 5, nome: "evangelion Collector's Edition Vol 1", id: 5, src: eva },
  { key: 6, nome: "ene Piece Vol 1", id: 6, src: onepiece },
  { key: 7, nome: "dracula - bram stroker", id: 7, src: dracula },
  { key: 8, nome: "a divina Comédia", id: 8, src: divina },
  { key: 9, nome: "crime e Castigo", id: 9, src: crimecastigo },
  { key: 10, nome: "coraline", id: 10, src: coraline },
];

//o export default serve para ter apenas 1 export e exportar todo o código do arquivo
