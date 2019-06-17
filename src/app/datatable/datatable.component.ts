import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import Chart from 'chart.js';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

    Operations: Object;
    chartOpe: any;
    chartmonth: any;
    chartMaj: any;
    chartComp: any;
    chartMail: any;
    data: Object;
    isloading = false;

    constructor(private http: HttpClient) {
    }

  ngOnInit() {
      this.http.get('http://localhost:8000/api/operation/operationAll')
          .subscribe((data: any) => {
                  this.Operations = data.operations;
                  this.isloading = true;


                  var ctx1 = document.getElementById('chartContainer1');
                  var myDoughnutChart = new Chart(ctx1, {
                      type: 'doughnut',
                      data: {
                          datasets: [{
                              label: 'Opération',
                              data: [this.Operations, this.Operations, 1],
                              backgroundColor: [
                                  '#00B900',
                                  '#ffc107',
                                  '#dc3545'
                              ]
                          }],
                          labels: ['Réalisées', 'Actives', 'Non délivré']
                      }
                  });
              },
              error => {
                  console.log(error);
              }
          );


      this.http.get('http://localhost:8000/api/contact/chart')
          .subscribe((data: any) => {
                  this.chartmonth = data;
                  this.isloading = true;


                  var ctx3 = document.getElementById('chartContainer3');
                  var chart = new Chart(ctx3, {
                      type: 'line',
                      data: {
                          datasets: [{
                              label: 'Contacts gagnés',
                              data: [this.chartmonth.month4, this.chartmonth.month3, this.chartmonth.month2, this.chartmonth.month1]
                          }],
                          labels: ['Mars', 'Avril', 'Mai', 'Juin']
                      },
                      options: {
                          scales: {
                              yAxes: [{
                                  ticks: {
                                      suggestedMin: 50,
                                      suggestedMax: 100
                                  }
                              }]
                          }
                      }
                  });
              },
              error => {
                  console.log(error);
              }
          );

      this.http.get('http://localhost:8000/api/operation/chartOpe')
          .subscribe((data: any) => {
                  this.chartOpe = data;
                  this.isloading = true;


                  var ctx2 = document.getElementById('chartContainer2');
                  var chart = new Chart(ctx2, {
                      type: 'line',
                      data: {
                          datasets: [{
                              label: 'Opération',
                              data: [this.chartOpe.month4, this.chartOpe.month3, this.chartOpe.month2, this.chartOpe.month1]
                          }],
                          labels: ['Mars', 'Avril', 'Mai', 'Juin']
                      },
                      options: {
                          scales: {
                              yAxes: [{
                                  ticks: {
                                      suggestedMin: 50,
                                      suggestedMax: 100
                                  }
                              }]
                          }
                      }
                  });
              },
              error => {
                  console.log(error);
              }
          );

      this.http.get('http://localhost:8000/api/contact/chartMaj')
          .subscribe((data: any) => {
                  this.chartMaj = data;
                  this.isloading = true;


                  var ctx4 = document.getElementById('chartContainer4');
                  var chart = new Chart(ctx4, {
                      type: 'line',
                      data: {
                          datasets: [{
                              label: 'Contact mis à jour',
                              data: [this.chartMaj.month4, this.chartMaj.month3, this.chartMaj.month2, this.chartMaj.month1]
                          }],
                          labels: ['Mars', 'Avril', 'Mai', 'Juin']
                      },
                      options: {
                          scales: {
                              yAxes: [{
                                  ticks: {
                                      suggestedMin: 50,
                                      suggestedMax: 100
                                  }
                              }]
                          }
                      }
                  });
              },
              error => {
                  console.log(error);
              }
          );


      this.http.get('http://localhost:8000/api/company/chartComp')
          .subscribe((data: any) => {
                  this.chartComp = data;
                  this.isloading = true;


                  var ctx6 = document.getElementById('chartContainer6');
                  var chart = new Chart(ctx6, {
                      type: 'line',
                      data: {
                          datasets: [{
                              label: 'Nouvelles entreprises',
                              data: [this.chartComp.month4, this.chartComp.month3, this.chartComp.month2, this.chartComp.month1]
                          }],
                          labels: ['Mars', 'Avril', 'Mai', 'Juin']
                      },
                      options: {
                          scales: {
                              yAxes: [{
                                  ticks: {
                                      suggestedMin: 50,
                                      suggestedMax: 100
                                  }
                              }]
                          }
                      }
                  });
              },
              error => {
                  console.log(error);
              }
          );

      this.http.get('http://localhost:8000/api/operation/chartMail')
          .subscribe((data: any) => {
                  this.chartMail = data;
                  this.isloading = true;


                  var ctx7 = document.getElementById('chartContainer7');
                  var chart = new Chart(ctx7, {
                      type: 'line',
                      data: {
                          datasets: [{
                              label: 'Nouveaux emails',
                              data: [this.chartMail.month4, this.chartMail.month3, this.chartMail.month2, this.chartMail.month1]
                          }],
                          labels: ['Mars', 'Avril', 'Mai', 'Juin']
                      },
                      options: {
                          scales: {
                              yAxes: [{
                                  ticks: {
                                      suggestedMin: 50,
                                      suggestedMax: 100
                                  }
                              }]
                          }
                      }
                  });
              },
              error => {
                  console.log(error);
              }
          );





    $(document).ready(function() {
      $('#liste-graphe a').click(function(){
        var id        = $(this).attr('id');
        var idGraphe  = $(this).data('chart');

        $( '#liste-graphe a' ).each(function() {
          $( this ).removeClass( 'active' );
        });

        $('a#'+id).addClass('active');

        $( '.graph-view' ).each(function() {
          $( this ).addClass( 'hide' );
        });
        $('#graphContainer'+idGraphe).removeClass('hide');
      });






      var ctx5 = document.getElementById('chartContainer5');
      var chart = new Chart(ctx5, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Contact perdus',
                data: [0, 1, 0, 0]
            }],
            labels: ['Mars', 'Avril', 'Mai', 'Juin']
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }]
            }
        }
      });




    });
  }

}
