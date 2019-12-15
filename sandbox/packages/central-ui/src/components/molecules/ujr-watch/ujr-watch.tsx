import { Component, State, Prop, h } from '@stencil/core';

@Component({
  tag: 'ujr-watch',
  styleUrl: 'ujr-watch.css',
  shadow: true
})
export class UjrWatch {
  /**
   * The first name
   */
  @Prop() format: string;

  timer: number;

  /**
   * State
   */
  @State() time: number = Date.now();

  componentDidLoad() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
    console.log(this.format);
  }
  
  render() {
    var now  = new Date();
    var time = now.toLocaleTimeString('en-US', { hour12: true });
    if ( this.format == "24" ) {
        time = now.toLocaleTimeString('en-US', { hour12: false });
    }    

    return (
      <svg width="350" height="180">
        <g>
          <rect x="0" y="0" rx="8" ry="8" width="145" height="35" />
          <text x="11" y="23" class="text-watch">{ time }</text>
          <text x="95" y="21" class="text-copyright">©UJR</text>
        </g>
      </svg>
      
    );
  }
}
