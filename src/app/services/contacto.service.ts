import { Injectable } from '@angular/core';
import { Contacto } from '../models/contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  listContactos:Contacto[] = [
    {nombre: 'Juan Ramirez', correo: 'juan@gmail.com', informacionDeTrabajo: 'algo', numeroTel: [8095595959, 8095544332, 4545454, 454545, 13452345, 4523454524, 2345555]},
    {nombre: 'Pedro Santos', correo: 'pedrito@gmail.com', informacionDeTrabajo: 'trabaja aqui', numeroTel: [8974158963, 7894561144]},
    {nombre: 'Rosner Lewis', correo: 'ronerle@gmail.com', informacionDeTrabajo: 'Trabaja alla', numeroTel: [4856321452, 8087779898]},
    {nombre: 'Merido Santos', correo: 'meridoLP@gmail.com', informacionDeTrabajo: 'El patron', numeroTel: [8095452214, 8295654444]},
  ]

  constructor() { }

  // Funcion para devolver el listado de contactos
  getContactos():Contacto[] {
    return this.listContactos
  }

  // Funcion para eliminar contactos existentes
  deleteContacto(index:number):void{
    this.listContactos.splice(index,1);
  }
}
