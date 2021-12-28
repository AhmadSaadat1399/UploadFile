import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NOEServiceService } from './noeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageSrc: string;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpClient) {}
  @Input() emp:any;
  EmployeId:string;
  EmployeeName:string;



  // addEmployee(){
  //   var val= {
  //     emId: this.EmployeId,
  //     EmpName: this.EmployeeName
  //   };
  //   this.services.addEmployee(val).subscribe((respon) =>{
  //   alert(respon.toString());
  //   });
  // }

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.myForm.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }

  submit() {
    console.log(this.myForm.value);
    this.http.post('', this.myForm.value).subscribe((res) => {
      console.log(res);
      alert('Uploaded Successfully.');
    });
  }
}
