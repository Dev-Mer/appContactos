import { Injectable } from '@angular/core';
import { Contacto } from '../models/contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  listContactos:Contacto[] = [
    {nombre: 'Juan Ramirez', correo: 'juan@gmail.com', informacionDeTrabajo: 'algo', numeroTel: ['809559595', '8095544332', '4545454', '454545', '13452345', '4523454524', '2345555']},
    {nombre: 'Pedro Santos', correo: 'pedrito@gmail.com', informacionDeTrabajo: 'trabaja aqui', numeroTel: ['8974158963', '7894561144']},
    {nombre: 'Rosner Lewis', correo: 'ronerle@gmail.com', informacionDeTrabajo: 'Trabaja alla', numeroTel: ['4856321452', '8087779898']},
    {nombre: 'Merido Santos', correo: 'meridoLP@gmail.com', informacionDeTrabajo: 'El patron', numeroTel: ['8095452214', '8295654444']},
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

  // Funcion para agregar un contacto nuevo
  agregarContacto(contacto:Contacto):void {
    this.listContactos.push(contacto);
  }

  // Funcion para devolver un contacto en una posicion en especifico
  getContactoByPos(index: number): Contacto {
    return this.listContactos[index];
  }

  // Funcion para editar un contacto existente
  editarContacto(contacto: Contacto, index: number): void {
    this.listContactos[index].nombre = contacto.nombre;
    this.listContactos[index].correo = contacto.correo;
    this.listContactos[index].informacionDeTrabajo = contacto.informacionDeTrabajo;
    this.listContactos[index].numeroTel = contacto.numeroTel;
  }

  // Funcion para eliminar un telefono de un Contacto
  eliminarTelefono(posContacto: number, index: number): void {
    this.listContactos[posContacto].numeroTel.splice(index, 1);
  }

  // Funcion para editar un telefono de un Contacto
  editarTelefono(posContacto: number, posTel: number, newTel: string):void {
    this.listContactos[posContacto].numeroTel[posTel] = newTel;
  }
}
