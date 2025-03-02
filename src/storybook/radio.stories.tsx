import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {Radio} from "../components/Radio/Radio";


const meta: Meta<typeof Radio> = {
  title: 'Component/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Radio>;

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Radio onChange={() => setIsChecked(!isChecked)} isChecked={isChecked} {...args} />
      <span>Какой-то текст</span>
    </div>
  );
};

const args = {};

export const Base = Template.bind({}) as Story;
Base.args = {
  ...args,
};