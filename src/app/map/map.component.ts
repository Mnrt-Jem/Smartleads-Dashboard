import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  region: Object;
  data: Object;
  isloading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:8000/api/user/region')
        .subscribe((data: any) => {
              this.region = data.region;
              this.isloading = true;

          for(let i = 0; i < 5; i++){

            var expr = this.region[i].region;

            switch (expr) {
              case 'Alsace':
                let drawingBuffer0:HTMLElement = document.querySelectorAll("[data-num='67']")[0] as HTMLElement;
                drawingBuffer0.style.fill = '86AAE0';
                break;
              case 'Aquitaine':
                let drawingBuffer1:HTMLElement = document.querySelectorAll("[data-num='33']")[0] as HTMLElement;
                drawingBuffer1.style.fill = '86AAE0';
                break;
              case 'Auvergne':
                let drawingBuffer2:HTMLElement = document.querySelectorAll("[data-num='63']")[0] as HTMLElement;
                drawingBuffer2.style.fill = '86AAE0';
                break;
              case 'Basse Normandie':
                let drawingBuffer3:HTMLElement = document.querySelectorAll("[data-num='14']")[0] as HTMLElement;
                drawingBuffer3.style.fill = '86AAE0';
                break;
              case 'Bourgogne':
                let drawingBuffer4:HTMLElement = document.querySelectorAll("[data-num='21']")[0] as HTMLElement;
                drawingBuffer4.style.fill = '86AAE0';
                break;
              case 'Bretagne':
                let drawingBuffer5:HTMLElement = document.querySelectorAll("[data-num='29']")[0] as HTMLElement;
                drawingBuffer5.style.fill = '86AAE0';
                break;
              case 'Centre':
                let drawingBuffer6:HTMLElement = document.querySelectorAll("[data-num='41']")[0] as HTMLElement;
                drawingBuffer6.style.fill = '86AAE0';
                break;
              case 'Champagne-Ardenne':
                let drawingBuffer7:HTMLElement = document.querySelectorAll("[data-num='51']")[0] as HTMLElement;
                drawingBuffer7.style.fill = '86AAE0';
                break;
              case 'Corse':
                let drawingBuffer8:HTMLElement = document.querySelectorAll("[data-num='2A']")[0] as HTMLElement;
                drawingBuffer8.style.fill = '86AAE0';
                break;
              case 'Franche-Comté':
                let drawingBuffer9:HTMLElement = document.querySelectorAll("[data-num='25']")[0] as HTMLElement;
                drawingBuffer9.style.fill = '86AAE0';
                break;
              case 'Haute Normandie':
                let drawingBuffer10:HTMLElement = document.querySelectorAll("[data-num='76']")[0] as HTMLElement;
                drawingBuffer10.style.fill = '86AAE0';
                break;
              case 'Ile-de-France':
                let drawingBuffer11:HTMLElement = document.querySelectorAll("[data-num='77']")[0] as HTMLElement;
                drawingBuffer11.style.fill = '86AAE0';
                break;
              case 'Languedoc-Roussillon':
                let drawingBuffer12:HTMLElement = document.querySelectorAll("[data-num='34']")[0] as HTMLElement;
                drawingBuffer12.style.fill = '86AAE0';
                break;
              case 'Limousin':
                let drawingBuffer13:HTMLElement = document.querySelectorAll("[data-num='87']")[0] as HTMLElement;
                drawingBuffer13.style.fill = '86AAE0';
                break;
              case 'Lorraine':
                let drawingBuffer14:HTMLElement = document.querySelectorAll("[data-num='54']")[0] as HTMLElement;
                drawingBuffer14.style.fill = '86AAE0';
                break;
              case 'Midi-Pyrénées':
                let drawingBuffer15:HTMLElement = document.querySelectorAll("[data-num='31']")[0] as HTMLElement;
                drawingBuffer15.style.fill = '86AAE0';
                break;
              case 'Nord-Pas-de-Calais':
                let drawingBuffer16:HTMLElement = document.querySelectorAll("[data-num='62']")[0] as HTMLElement;
                drawingBuffer16.style.fill = '86AAE0';
                break;
              case 'Picardie':
                let drawingBuffer17:HTMLElement = document.querySelectorAll("[data-num='60']")[0] as HTMLElement;
                drawingBuffer17.style.fill = '86AAE0';
                break;
              case 'Poitou-Charentes':
                let drawingBuffer18:HTMLElement = document.querySelectorAll("[data-num='17']")[0] as HTMLElement;
                drawingBuffer18.style.fill = '86AAE0';
                break;
              case 'Rhône-Alpes':
                let drawingBuffer19:HTMLElement = document.querySelectorAll("[data-num='38']")[0] as HTMLElement;
                drawingBuffer19.style.fill = '86AAE0';
                break;
              default:
                console.log('Sorry, we are out of ' + expr + '.');
            }
          }


            },
            error => {
              console.log(error);
            }
        );


  }



}
