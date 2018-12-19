import { Component, State, Prop } from '@stencil/core';

@Component({
  tag: 'ujr-clock',
  styleUrl: 'ujrclock.css'
})

export class UjrClock {

  @Prop() format: string;
  timer: number;

  @State() time: number = Date.now();

  componentDidLoad() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
    console.log(this.format);
  }

  componentDidUnload() {
    window.clearInterval(this.timer);
  }

  render() {
    var now  = new Date();
    var time = now.toLocaleTimeString('en-US', { hour12: true });
    if ( this.format == "24" ) {
        time = now.toLocaleTimeString('en-US', { hour12: false });
    }    

    return (
      <span>{ time } &nbsp;&nbsp;© Ujr</span>
    );
  }
}