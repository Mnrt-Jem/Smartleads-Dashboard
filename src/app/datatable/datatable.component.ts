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
    chartmonth: any;
    data: Object;
    isloading = false;

    constructor(private http: HttpClient) {
    }

  ngOnInit() {
      this.http.get('http://localhost:8000/api/operation/operationAll')
          .subscribe((data: any) => {
                  this.Operations = data.operations;
                  this.isloading = true;
                  console.log(this.Operations);

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
                  console.log(this.chartmonth);

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





      var ctx2 = document.getElementById('chartContainer2');
      var chart = new Chart(ctx2, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Opération',
                data: [0, 20, 40, 50]
            }],
            labels: ['January', 'February', 'March', 'April']
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
      var ctx3 = document.getElementById('chartContainer3');
      var chart = new Chart(ctx3, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Contacts gagnés',
                data: [0, 20, 40, 50]
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
      var ctx4 = document.getElementById('chartContainer4');
      var chart = new Chart(ctx4, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Contact mis à jour',
                data: [0, 20, 40, 50]
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

      var ctx5 = document.getElementById('chartContainer5');
      var chart = new Chart(ctx5, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Contact perdus',
                data: [0, 20, 40, 50]
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

      var ctx6 = document.getElementById('chartContainer6');
      var chart = new Chart(ctx6, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Nouvelles entreprises',
                data: [0, 20, 40, 50]
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

      var ctx7 = document.getElementById('chartContainer7');
      var chart = new Chart(ctx7, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Nouveaux emails',
                data: [0, 20, 40, 50]
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
