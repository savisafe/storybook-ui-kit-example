import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Checkbox from '../components/Checkbox/Checkbox.tsx';

const meta: Meta<typeof Checkbox> = {
  title: 'Component/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Текст чекбокса',
      control: 'text',
      defaultValue: 'Согласен с условиями политики конфиденциальности',
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
type Story = StoryObj<typeof Checkbox>;

const Template = (args) => {
  const [value, setValue] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Checkbox onChange={(e) => setValue(e.target.checked)} checked={value} {...args} />
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

export const DisabledChecked = Template.bind({}) as Story;
DisabledChecked.args = {
  ...args,
  disabledChecked: true,
};

export const Reversed = Template.bind({}) as Story;
Reversed.args = {
  ...args,
  reversed: true,
};
