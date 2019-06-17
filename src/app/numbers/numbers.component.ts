import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-numbers',
    templateUrl: './numbers.component.html',
    styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

    NbNewCont: Object;
    PourcentNewCont: Object;
    NbContactActif: Object;
    NbEntreprises: Object;
    PourcentEntreprise: Object;
    NbEntrepriseAct: Object;
    NewEmail: Object;
    Emails: Object;
    PourcentEmails: Object;
    Operations: Object;
    NewOp: Object;
    PourcentOpe: Object;
    data: Object;
    isloading = false;
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get('http://localhost:8000/api/contact/contactActif')
            .subscribe((data: any) => {
                    this.NbContactActif = data.contactActif;
                    this.isloading = true;
                    console.log(this.NbContactActif);
                },
                error => {
                    console.log(error);
                }
            );

        this.http.get('http://localhost:8000/api/contact/newContacts/month')
            .subscribe((data: any) => {
                    this.NbNewCont = data.result;
                    this.PourcentNewCont = data.pourcent;
                    this.isloading = true;
                    console.log(this.NbNewCont);
                },
                error => {
                    console.log(error);
                }
            );

        this.http.get('http://localhost:8000/api/company/companyActif')
            .subscribe((data: any) => {
                    this.NbEntreprises = data.companyActif;
                    this.isloading = true;
                    console.log(this.NbEntreprises);
                },
                error => {
                    console.log(error);
                }
            );

        this.http.get('http://localhost:8000/api/company/newCompany/month')
            .subscribe((data: any) => {
                    this.NbEntrepriseAct = data.newCompany;
                    this.PourcentEntreprise = data.pourcent;
                    this.isloading = true;
                    console.log(this.NbEntrepriseAct);
                },
                error => {
                    console.log(error);
                }
            );

        this.http.get('http://localhost:8000/api/operation/emailsAll')
            .subscribe((data: any) => {
                    this.NewEmail = data.newEmails;
                    this.PourcentEmails = data.pourcent;
                    this.isloading = true;
                    console.log(this.NewEmail);
                },
                error => {
                    console.log(error);
                }
            );

        this.http.get('http://localhost:8000/api/operation/emails')
            .subscribe((data: any) => {
                    this.Emails = data.emails;
                    this.isloading = true;
                    console.log(this.Emails);
                },
                error => {
                    console.log(error);
                }
            );
        this.http.get('http://localhost:8000/api/operation/operationAll')
            .subscribe((data: any) => {
                    this.Operations = data.operations;
                    this.isloading = true;
                    console.log(this.Operations);
                },
                error => {
                    console.log(error);
                }
            );

        this.http.get('http://localhost:8000/api/operation/Operation/month')
            .subscribe((data: any) => {
                    this.NewOp = data.newOp;
                    this.PourcentOpe = data.pourcent;
                    this.isloading = true;
                    console.log(this.NewOp);
                },
                error => {
                    console.log(error);
                }
            );


    }

}
