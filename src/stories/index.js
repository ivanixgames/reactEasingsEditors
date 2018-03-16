import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs/react';

import CubicBezier from '../components/Easings/CubicBezier/Basic';
import Preview from '../components/Easings/Previews/Basic';

const arr2join = name => {
  const actionFn = action(name)
  return (...args) => actionFn(args.join(','))
}

/*

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
  
storiesOf('EasingEditor', module)
  .add('CubicBezier 1', 
  () => <CubicBezier defaultSet={[0,0,1,1]} onChanged={arr2join('onChanged: ')} /> );

*/


const stories = storiesOf('EasingEditors', module);
stories.addDecorator(withKnobs);

stories.add('CubicBezier Basic', () => {
  return (<CubicBezier defaultSet={[0,0,1,1]} onChanged={arr2join('onChanged: ')} /> );
});

stories.add('Preview Basic w Knobs (WIP)', () => {
  const ax = number('ax', 0);
  const ay = number('ay', 0);
  const bx = number('bx', 1);
  const by = number('by', 1);
  const set = [ax, ay, bx, by];
  return (<Preview defaultSet={set} /> );
});
stories.add('CubicBezier Basic w Knobs (WIP)', () => {
  const ax = number('ax', 0);
  const ay = number('ay', 0);
  const bx = number('bx', 1);
  const by = number('by', 1);
  return (<CubicBezier defaultSet={[ax, ay, bx, by]} onChanged={arr2join('onChanged: ')} /> );
});
