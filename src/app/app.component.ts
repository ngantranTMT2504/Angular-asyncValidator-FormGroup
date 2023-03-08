import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { nameAllow } from './nameAllow.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'formReactive';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  reactiveForm = this.fb.group(
  {
    firstName: new FormControl(''),
    midName: new FormControl(''),
    lastName: new FormControl('')
  }, {
    asyncValidator: nameAllow
  });
  onSubmit() {
    console.log(this.reactiveForm)
    console.log(this.reactiveForm.dirty)
  }
}

