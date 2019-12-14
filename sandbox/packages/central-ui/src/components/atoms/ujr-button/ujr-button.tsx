import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ujr-button',
  styleUrl: 'ujr-button.css',
  shadow: true
})
export class UjrButton {
  /**
   * The first name
   */
  @Prop() label: string;

  
  private getLabel(): string {
    return this.label;
  }

  render() {
    return <button type="button">{this.getLabel()}</button>;
  }
}
