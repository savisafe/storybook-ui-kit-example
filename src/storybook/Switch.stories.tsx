import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Switch from '../components/CustomSwitch';

const meta: Meta<typeof Switch> = {
  title: 'Component/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Текст чекбокса',
      defaultValue: 'Согласен с условиями политики конфиденциальности',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    caption: {
      description: 'Подпись под чекбоксом',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      description: 'Активное состояние',
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      description: 'Заблокированное состояние',
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabledChecked: {
      description: 'Заблокированное состояние',
      table: {
        type: { summary: 'boolean' },
      },
    },
    reversed: {
      description: 'Зеркальное состояние',
      table: {
        type: { summary: 'boolean' },
      },
    },
    error: {
      description: 'Состояние c ошибкой',
      table: {
        type: { summary: 'boolean' },
      },
    },
    tool: {
      description: 'Состояние с тултипом',
      table: {
        type: { summary: 'boolean' },
      },
    },
    content: {
      description: 'Текст тултипа',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const Template = (args) => {
  const [value, setValue] = useState(false);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Switch onChange={(e) => setValue(e.target.checked)} checked={value} {...args} />
    </div>
  );
};

const args = {
  title: 'Согласен с условиями политики конфиденциальности',
  error: false,
  disabled: false,
  reversed: false,
  tool: false,
};

export const Base = Template.bind({}) as Story;
Base.args = {
  ...args,
};

export const With_caption = Template.bind({}) as Story;
With_caption.args = {
  ...args,
  caption: 'Это очень важно',
};

export const With_error = Template.bind({}) as Story;
With_error.args = {
  ...args,
  error: true,
  caption: 'Произошла ошибка',
};

export const Disabled = Template.bind({}) as Story;
Disabled.args = {
  ...args,
  disabled: true,
};

export const Reversed = Template.bind({}) as Story;
Reversed.args = {
  ...args,
  reversed: true,
};
