import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { routerTransition } from '../../services/config.service';
import { FirebaseServiceService } from '../../services/firebase-service.service';


@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.scss'],
	//   animations: [routerTransition()],
	// host: {'[@routerTransition]': ''} 
})
export class ResultComponent implements OnInit {

	@ViewChild('enrollmentN') enrollmentN: ElementRef;
	index: any;
	years: any[] = [];
	courses: any[] = [];
	CE: any[] = [];
	studentDetails: any[] = [];
	enrollmentNumber: any;
	resultDetails: any[] = [];
	
	enrollNumber: string = '';
	show: boolean = false;

	selectedCourse: string = 'CE';
	selectedSemester: string = 'Semester1';

	studentColumns: string[] = ['Name'];
	displayedColumns: string[] = ['Subject'];
	displayValues: string[]=['Grade']

	student: any[] = [];
	result:any[]=[];
	keys:any[]=[];
	values:any[]=[];


	constructor(private router: Router, private route: ActivatedRoute, private firebaseService: FirebaseServiceService) { }

	ngOnInit() {

	}
	getStudentDetails() {
		console.log("selected course", this.selectedCourse);
		let valid = 0;
		this.enrollNumber = this.enrollNumber.trim();
		this.studentDetails = this.firebaseService.getStudentDetails();
		
		this.studentDetails.forEach((detail) => {

			if (detail[this.enrollNumber]) {
				this.student = [];
				this.student.push(detail[this.enrollNumber].Name);
				console.log('student',this.student);
				this.getResultDetails();
				valid = 1;
				return;
			}


		})
		if (valid) {
			this.show = true;
		}
		else {
			this.show = false;
		}
	}

	getResultDetails(){
		let var1,var2,var3;
		this.resultDetails = this.firebaseService.getresultDetails();
		console.log("resultDetails", this.resultDetails);
		this.resultDetails.forEach((item) => {
			var1=item[this.selectedCourse];
				if(var1)
				{
					var2= var1[this.enrollNumber];
					if(var2){

					
					if(var2[this.selectedSemester])
					{
						this.result=[];
						this.values=[];
						this.result.push(var2[this.selectedSemester]);
						console.log("result", this.result);
						this.keys=Object.keys(this.result[0]);
						this.keys.forEach((item) => {
							this.values.push(this.result[0][item]);
						})
						console.log('values',this.values);
					}	
					
				}
					
				}
				
			})
	


	}

}
