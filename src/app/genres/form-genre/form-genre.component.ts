import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from '../../validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrl: './form-genre.component.css'
})
export class FormGenreComponent implements OnInit {
constructor( private formBuilder: FormBuilder){}


@Input()
model:genreCreationDTO;

form: FormGroup;
@Output()
onSaveChanges:EventEmitter<genreCreationDTO> =new EventEmitter<genreCreationDTO>();
ngOnInit(): void {
  this.form =this.formBuilder.group({
    name:['',{
      validators:[Validators.required,Validators.minLength(3),firstLetterUppercase()]
    }]
  });

  if(this.model!== undefined){
    this.form.patchValue(this.model);
  }
}

saveChanges(){
 this.onSaveChanges.emit(this.form.value);
}

getErrorMessageFieldName(){
  const field = this.form.get('name');
  if(field.hasError('required')){
    return "the name field is required"
  }
  if(field.hasError('minlength')){
    return 'the minimun length is 3'
  }

  if(field.hasError('firstLetterUppercase')){
    return field.getError('firstLetterUppercase').message;
  }
  return '';
}

}
