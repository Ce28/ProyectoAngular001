import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  ////Archivo 7 - Directiva ngMode
  // titulo = 'Administración de artículos';
  // accion = 1;
  // art = {
  //   codigo: null,
  //   descripcion: null,
  //   precio: null
  // }

  // articulos = [
  //   {codigo:1, descripcion:'papas', precio:10.55},
  //   {codigo:2, descripcion:'manzanas', precio:12.10},
  //   {codigo:3, descripcion:'melon', precio:52.30},
  //   {codigo:4, descripcion:'cebollas', precio:17},
  //   {codigo:5, descripcion:'calabaza', precio:20},
  // ];

  // hayRegistros(){
  //   return this.articulos.length>0;
  // }

  // borrar(arti){
  //   for (let x = 0; x < this.articulos.length; x++){
  //     if (this.articulos[x].codigo == arti.codigo){
  //       if (confirm('Desea elminar el producto con codigo: '+arti.codigo))
  //       {
  //         this.articulos.splice(x, 1);
  //         this.limpiar();
  //         alert('Articulo eliminado');
  //         return;
  //       }
  //     }
  //   }
  // }

  // agregar(){
  //   for (let x = 0; x < this.articulos.length; x++){
  //     if (this.articulos[x].codigo == this.art.codigo){
  //       alert('Ya existe un articulo con dicho codigo');
  //       return;
  //     }
  //     if (this.art.codigo == null)
  //     {
  //       alert('Debe de agregar un codigo a este articulo');
  //       return;
  //     }
  //   }
  //   this.articulos.push({
  //     codigo: this.art.codigo,
  //     descripcion: this.art.descripcion,
  //     precio: this.art.precio}
  //   );
  //   this.limpiar();
  // }

  // seleccionar(arti){
  //   this.art.codigo = arti.codigo;
  //   this.art.descripcion = arti.descripcion;
  //   this.art.precio = arti.precio;
  //   this.accion = 2;
  // }

  // modificar(){
  //   for (let x = 0; x < this.articulos.length; x++){
  //     if (this.articulos[x].codigo == this.art.codigo){
  //       this.articulos[x].descripcion = this.art.descripcion;
  //       this.articulos[x].precio = this.art.precio;
  //       this.limpiar();
  //       return;
  //     }
  //   }    
  //   alert('No existe el codigo del articulo ingresado');
  // }

  // limpiar(){
  //   this.art = {
  //     codigo: null,
  //     descripcion: null,
  //     precio: null
  //   };
  //   this.accion = 1;
  // }

  ////Archivo 7 - Directiva ngModel
  // nombre = '';
  // apellido = '';



  ////Archivo 6 - Captura de eventos
  // contador = 1;
  // incrementar(){
  //   this.contador++;
  // }
  // decrementar(){
  //   this.contador--;
  // }



  ////Archivo 5 - Directivas *ngIf y *ngFor
  // nombre = 'Rodriguez Pablo';
  // edad = 19;
  // sueldos = [1700, 1600, 1900];


  
  ////Archivo 4 - Interpolación en los archivos HTML de Angular
  // nombre = 'Rodriguez Pablo';
  // edad = 40;
  // email = 'rpablo@gmail.com';
  // sueldos = [1700, 1600, 1900];
  // activo = true;

  // esActivo() {
  //   if (this.activo)
  //   {
  //     return 'Trabajador Activo';
  //   }
  //   else
  //   {
  //     return 'Trabajador Inactivo';
  //   }
  // }

  // ultimos3Sueldos() {
  //   let suma = 0;
  //   for (let x = 0; x < this.sueldos.length; x++)
  //   {
  //     suma += this.sueldos[x];
  //   }
  //   return suma;
  // }
}
