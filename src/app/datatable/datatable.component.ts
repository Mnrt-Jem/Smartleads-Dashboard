import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Chart from 'chart.js';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
      var ctx1 = document.getElementById('chartContainer1');
  		var myDoughnutChart = new Chart(ctx1, {
  			type: 'doughnut',
  			data: {
  				datasets: [{
  					label: 'Opération',
  					data: [0, 20, 40, 50]
  				}],
  				labels: ['January', 'February', 'March', 'April']
  			}
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
                label: 'nouveaux contacts',
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
      var ctx4 = document.getElementById('chartContainer4');
      var chart = new Chart(ctx4, {
        type: 'line',
        data: {
            datasets: [{
                label: 'contact mis à jour',
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

      var ctx5 = document.getElementById('chartContainer5');
      var chart = new Chart(ctx5, {
        type: 'line',
        data: {
            datasets: [{
                label: 'contact perdus',
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

      var ctx6 = document.getElementById('chartContainer6');
      var chart = new Chart(ctx6, {
        type: 'line',
        data: {
            datasets: [{
                label: 'nouvelles entreprises',
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

      var ctx7 = document.getElementById('chartContainer7');
      var chart = new Chart(ctx7, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Nouveaux emails',
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
    });
  }

}
