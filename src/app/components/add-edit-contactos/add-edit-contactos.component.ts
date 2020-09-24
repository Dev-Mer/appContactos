import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contacto } from 'src/app/models/contactos';
import { ContactoService } from 'src/app/services/contacto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-edit-contactos',
  templateUrl: './add-edit-contactos.component.html',
  styleUrls: ['./add-edit-contactos.component.css']
})
export class AddEditContactosComponent implements OnInit {

  posContacto: any;
  accion = "Crear"

  contactoForm: FormGroup;

  constructor(private  fb:FormBuilder,
              private contactoSvc: ContactoService,
              private route: Router,
              private _snackBar: MatSnackBar,
              private activatedRoute: ActivatedRoute) { 
    this.contactoForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
      correo: ['', [Validators.required, Validators.email]],
      workInfo: [''],
      telefono: ['', [Validators.required, Validators.pattern('[0-9,]*')]],
    });

    this.posContacto = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.posContacto !== undefined) {
      this.accion = "Editar"
      this.aEditar();
    }
  }

  // Almacenando los contactos
  guardarContacto():void {
    console.log(this.contactoForm)
    const contacto: Contacto = {
       nombre: this.contactoForm.get('nombreCompleto').value,
       correo: this.contactoForm.get('correo').value,
       informacionDeTrabajo: this.contactoForm.get('workInfo').value,
       numeroTel: this.contactoForm.get('telefono').value.split(",")
    };

    if (this.posContacto !== undefined) {
      this.editarContacto(contacto);
    }else{
      this.agregarContacto(contacto);
    }

  }
  // Almacenando los contactos
  
  // Agregando un contacto
  agregarContacto(contacto: Contacto):void {
    this.contactoSvc.agregarContacto(contacto);
    this.route.navigate(['/contactos'])
    this._snackBar.open("Se ha guardado el contacto exitosamente.","", {
      duration: 4000
    });
  }
  // Agregando un contacto

  // Editando contacto
  editarContacto(contacto: Contacto):void {
    this.contactoSvc.editarContacto(contacto, this.posContacto);
    this.route.navigate(['/contactos'])
    this._snackBar.open("Se ha editado el contacto exitosamente.","", {
      duration: 4000
    });
  }
  // Editando contacto

  // Obteniendo Contacto por Pos/ID para editar
  aEditar():void {
    const contacto: Contacto = this.contactoSvc.getContactoByPos(this.posContacto);
    console.log(contacto)
    this.contactoForm.patchValue({
      nombreCompleto: contacto.nombre,
      correo: contacto.correo,
      workInfo: contacto.informacionDeTrabajo,
      telefono: contacto.numeroTel.toString(),
    })
  }
  // Obteniendo Contacto por Pos/ID para editar

}
