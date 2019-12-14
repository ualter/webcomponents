import { storiesOf } from '@storybook/html'
import { number, select, withKnobs } from '@storybook/addon-knobs';

import UjrButtonReadme from './src/components/atoms/ujr-button/readme.md';
import UjrWatchReadme from './src/components/molecules/ujr-watch/readme.md';

storiesOf('Ujr-Central-UI', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: UjrWatchReadme,
      sidebar: UjrWatchReadme
    }
  })
  .add('ujr-watch', () => {
    const label = 'Score';
    const defaultValue = 24;
    const options = {
      range: true,
      min: 12,
      max: 24,
      step:12,
    };
    const value = number(label, defaultValue, options);
    return `
    <ujr-watch format=${value}></ujr-watch>
    `;
  })
  .addParameters({
    readme: {
      content: UjrButtonReadme,
      sidebar: UjrButtonReadme
    }
  })
  .add('ujr-button', () => {
    const label = 'Values';
    const options = {
      Alpha: 'Alpha',
      Beta: 'Beta',
      Charlie: 'Charlie',
      Delta: 'Delta',
      Echo: 'Echo'
    };
    const defaultValue = 'Alpha';
    const value = select(label, options, defaultValue);
    return `
      <ujr-button label="${value}"></ujr-button>
    `;
  });