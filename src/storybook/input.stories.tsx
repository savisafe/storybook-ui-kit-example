import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input from '../components/Input/Input.tsx';

const meta: Meta<typeof Input> = {
  title: 'Component/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Тип поля',
      options: ['text', 'number', 'tel', 'email', 'date'],
      control: 'select',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      description: 'Плейсхолдер',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    error: {
      description: 'Состояние с ошибкой',
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
    caption: {
      description: 'Подпись под полем',
      control: 'text',
      table: {
        type: { summary: 'text' },
      },
    },
    className: {
      description: 'Дополнительный класс',
      control: 'text',
      table: {
        type: { summary: 'text' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const Template = (args) => {
  const [value, setValue] = useState<string>(args.value ?? '');
  const generatePromoCode = (prefix: string, length: number) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let promoCode = prefix;

    for (let i = 0; i < length; i++) {
      promoCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setValue(promoCode);
  };
  return (
      <>
        <Input
            onChange={(event) => {
              setValue(event.target.value);
            }}
            value={value}
            {...args}
            generatePromoCode={() => generatePromoCode('SLEDOPUT-', 4)}
        />
      </>
  );
};

const args = {
  disabled: false,
  error: false,
};

export const Base = Template.bind({}) as Story;
Base.args = {
  ...args,
};

export const With_placeholder = Template.bind({}) as Story;
With_placeholder.args = {
  ...args,
  placeholder: 'Введите текст',
};

export const With_caption = Template.bind({}) as Story;
With_caption.args = {
  ...args,
  caption: 'Важное сообщение.',
};

export const With_error = Template.bind({}) as Story;
With_error.args = {
  ...args,
  error: true,
  caption: 'Произошла ошибка!',
};

export const Disabled = Template.bind({}) as Story;
Disabled.args = {
  ...args,
  disabled: true,
};

export const CodeGenerator = Template.bind({}) as Story;
CodeGenerator.args = {
  ...args,
  generate: true,
  placeholder: 'Введите промокод',
};

