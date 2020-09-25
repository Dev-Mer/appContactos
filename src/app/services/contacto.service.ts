import { Injectable } from '@angular/core';
import { Contacto } from '../models/contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  localKeyName = "listContactos";

  // listContactos:Contacto[] = [
  //   {nombre: 'Juan Ramirez', correo: 'juan@gmail.com', informacionDeTrabajo: 'algo', numeroTel: ['809559595', '8095544332', '4545454', '454545', '13452345', '4523454524', '2345555']},
  //   {nombre: 'Pedro Santos', correo: 'pedrito@gmail.com', informacionDeTrabajo: 'trabaja aqui', numeroTel: ['8974158963', '7894561144']},
  //   {nombre: 'Rosner Lewis', correo: 'ronerle@gmail.com', informacionDeTrabajo: 'Trabaja alla', numeroTel: ['4856321452', '8087779898']},
  //   {nombre: 'Merido Santos', correo: 'meridoLP@gmail.com', informacionDeTrabajo: 'El patron', numeroTel: ['8095452214', '8295654444']},
  // ]

  constructor() { }

  //Funcion para colocar informacion de prueba al LocalStorage
  // fillLocalStorage():void{
  //   localStorage.setItem(this.localKeyName, JSON.stringify(this.listContactos));
  // }

  // Funcion para actualizar el localStorage
  actualizarLocalStorage(listContactos: Contacto[]):void {
    localStorage.setItem(this.localKeyName, JSON.stringify(listContactos));
  }

  // Funcion para devolver el listado de contactos
  getContactos():Contacto[] {
    // return this.listContactos
    return JSON.parse(localStorage.getItem(this.localKeyName));
  }

  // Funcion para eliminar contactos existentes
  deleteContacto(index:number):void{
    // this.listContactos.splice(index,1);
    const contactos: Contacto[] = this.getContactos();
    contactos.splice(index,1);
    this.actualizarLocalStorage(contactos);
  }

  // Funcion para agregar un contacto nuevo
  agregarContacto(contacto:Contacto):void {
    // this.listContactos.push(contacto);
    const contactos: Contacto[] = this.getContactos();
    if (contactos !== null) {
      contactos.push(contacto);
      this.actualizarLocalStorage(contactos);
    }else{
      const newContactos: Contacto[] = [];
      newContactos.push(contacto)
      this.actualizarLocalStorage(newContactos);
    }
  }

  // Funcion para devolver un contacto en una posicion en especifico
  getContactoByPos(index: number): Contacto {
    // return this.listContactos[index];
    const contactos: Contacto[] = this.getContactos();
    return contactos[index];
  }

  // Funcion para editar un contacto existente
  editarContacto(contacto: Contacto, index: number): void {
    // this.listContactos[index].nombre = contacto.nombre;
    // this.listContactos[index].correo = contacto.correo;
    // this.listContactos[index].informacionDeTrabajo = contacto.informacionDeTrabajo;
    // this.listContactos[index].numeroTel = contacto.numeroTel;
    const contactos: Contacto[] = this.getContactos();
    contactos[index].nombre = contacto.nombre;
    contactos[index].correo = contacto.correo;
    contactos[index].informacionDeTrabajo = contacto.informacionDeTrabajo;
    contactos[index].numeroTel = contacto.numeroTel;
    this.actualizarLocalStorage(contactos);
  }

  // Funcion para eliminar un telefono de un Contacto
  eliminarTelefono(posContacto: number, index: number): void {
    // this.listContactos[posContacto].numeroTel.splice(index, 1);
    const contactos: Contacto[] = this.getContactos();
    contactos[posContacto].numeroTel.splice(index, 1);
    this.actualizarLocalStorage(contactos);
  }

  // Funcion para editar un telefono de un Contacto
  editarTelefono(posContacto: number, posTel: number, newTel: string):void {
    // this.listContactos[posContacto].numeroTel[posTel] = newTel;
    const contactos: Contacto[] = this.getContactos();
    contactos[posContacto].numeroTel[posTel] = newTel;
    this.actualizarLocalStorage(contactos);
  }

  // Funcion para agregar un telefono a un Contacto
  agregarTelefono(posContacto: number, newTel: string):void {
    // this.listContactos[posContacto].numeroTel.push(newTel);
    const contactos: Contacto[] = this.getContactos();
    contactos[posContacto].numeroTel.push(newTel);
    this.actualizarLocalStorage(contactos);
  }
}
