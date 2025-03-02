import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonInterface } from '../components/Button/Button.tsx';
import { JSX } from 'react/jsx-runtime';

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Цвет кнопки',
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary'],
      control: 'select',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      description: 'Размер кнопки',
      options: ['lg', 'md', 'sm', 'xs'],
      control: 'select',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      description: 'Тип кнопки',
      options: ['button', 'submit', 'reset'],
      control: 'select',
      defaultValue: 'button',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      description: 'Допольнительный класс',
      control: 'text',
      defaultValue: '',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const Template = (args: JSX.IntrinsicAttributes & ButtonInterface) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ maxWidth: 200 }}>
        <Button {...args}> Button </Button>
      </div>
    </div>
  );
};

export const Primary = Template.bind({}) as Story;
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({}) as Story;
Secondary.args = {
  variant: 'secondary',
};

export const Tertiary: Story = Template.bind({}) as Story;
Tertiary.args = {
  variant: 'tertiary',
};

export const Quaternary: Story = Template.bind({}) as Story;
Quaternary.args = {
  variant: 'quaternary',
};

export const Quinary: Story = Template.bind({}) as Story;
Quinary.args = {
  variant: 'quinary',
};

export const Senary: Story = Template.bind({}) as Story;
Senary.args = {
  variant: 'senary',
};

export const Septenary: Story = Template.bind({}) as Story;
Septenary.args = {
  variant: 'septenary',
};


export const Size_large = Template.bind({}) as Story;
Size_large.args = {
  variant: 'primary',
  size: 'lg',
};

export const Size_medium = Template.bind({}) as Story;
Size_medium.args = {
  variant: 'primary',
  size: 'md',
};

export const Size_small = Template.bind({}) as Story;
Size_small.args = {
  variant: 'primary',
  size: 'sm',
};

export const Size_extra_small = Template.bind({}) as Story;
Size_extra_small.args = {
  variant: 'primary',
  size: 'xs',
};
