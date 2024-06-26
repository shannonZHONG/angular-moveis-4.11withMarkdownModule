import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from '../../validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent implements OnInit {

  constructor(private router:Router,private formBuilder:FormBuilder){}
  
  ngOnInit(): void {
    
  }

  saveChanges(genreCreationDTO:genreCreationDTO){
  console.log(genreCreationDTO);
   this.router.navigate(['/genres']);
  }
  
}
