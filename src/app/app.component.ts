import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['red', 'blue', 'pink', 'black', 'orange', 'gray', 'green', 'yellow', 'purple' ];
  random_colors = this.shuffleArray(this.colors);
   shuffleArray(colors) {
    for (var i = colors.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    return colors;
  }

}
