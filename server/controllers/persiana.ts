import Persiana from '../models/persiana';
import BaseCtrl from './base';

export default class PersianaCtrl extends BaseCtrl {
  model = Persiana;

  // Hardcoded meanwhile mongo is set
  getAll = (req, res) => {
    let persianas = [
      {
        name:"enrollable", 
        descripcion:"Esto es una prueba", 
        galeria: [{foto: "../assets/img/bg2.jpeg"}, {foto: "../assets/img/bg3.jpeg"}, {foto: "../assets/img/bg4.jpeg"}]
      }
    ];
    res.json(persianas);
  }
}
