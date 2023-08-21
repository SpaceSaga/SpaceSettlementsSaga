import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';

interface Star {
  style: {
    top: string;
    left: string;
    animationDuration: string;
    animationDelay: string;
    opacity: string;
  };
}

interface StarLayer {
  stars: Star[];
  planets: Planet[];
  speed: number;
}


interface Planet {
  style: {
    top: string;
    left: string;
    backgroundColor: string;
  };
}

@Component({
  selector: 'space-settlements-saga-starfield-container',
  templateUrl: './starfield-container.component.html',
  styleUrls: ['./starfield-container.component.scss'],
})
export class StarfieldContainerComponent implements AfterViewInit {
  @ViewChild('contentTemplate', { static: true }) contentTemplate?: TemplateRef<any>;
  starLayers: StarLayer[] = [];

  ngAfterViewInit() {
    for (let i = 0; i < 3; i++) {
      const layer: StarLayer = {
        stars: [],
        planets: [],
        speed: (i + 1) * 50,
      };
      for (let j = 0; j < 100; j++) {
        layer.stars.push({
          style: {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${layer.speed}s`,
            animationDelay: `${Math.random() * -layer.speed}s`,
            opacity: `${(i + 1) * 0.2}`,
          },
        });
      }
      for (let k = 0; k < 5; k++) {
        layer.planets.push({
          style: {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, ${Math.random() * 30 + 50}%)`,
          },
        });
      }
      this.starLayers.push(layer);
    }
  }
}
