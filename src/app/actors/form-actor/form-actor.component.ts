import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreattionDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrl: './form-actor.component.css'
})
export class FormActorComponent implements OnInit {
constructor(private formBuilder:FormBuilder){};

form:FormGroup;

@Input()
model:actorCreattionDTO;

@Output()
onSaveChanges = new EventEmitter<actorCreattionDTO>

ngOnInit(): void {
  this.form = this.formBuilder.group({
    name:['',{
      validators:[Validators.required]
    }],
    dateOfBirth:"",
    picture:''
  });
  if(this.model !==undefined){
          this.form.patchValue(this.model);
}
}

onImageSelected(image){
this.form.get('picture').setValue(image);
}


saveChanges(){
this.onSaveChanges.emit(this.form.value)
}
}
