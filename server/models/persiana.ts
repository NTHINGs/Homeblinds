import * as mongoose from 'mongoose';

const persianaSchema = new mongoose.Schema({
  name: String,
  descripcion: String,
  galeria: [{foto: String}]
});

const Persiana = mongoose.model('Persiana', persianaSchema);

export default Persiana;
