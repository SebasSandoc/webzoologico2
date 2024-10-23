import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {

  animalList: any = [];
  animalForm: any;
  editableAnimal: boolean = false;
  idAnimal: any;

  constructor(private animalService: AnimalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) { 
      this.animalForm= this.formBuilder.group({
        nombre: '',
        edad: 0,
        tipo: '',
        fecha: Date
      })
    }
  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  newAnimalEntry() {
    
    this.animalService.newAnimal( this.animalForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /animal y recargando la ventana
        this.router.navigate(['/animal']).then(() => {
          //this.newMessage('Registro exitoso');
        })
      }
    );
  }


  ngOnInit() {
    this.getAllAnimals();
  }
}


