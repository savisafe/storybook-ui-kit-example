import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import PasswordInput from '../components/PasswordInput/PasswordInput.tsx';

const meta: Meta<typeof PasswordInput> = {
  title: 'Component/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  argTypes: {
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
    strengthIndicator: {
      description: 'Шкала сложности пароля',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

const Template = (args) => {
  const [value, setValue] = useState<string>(args.value ?? '');
  return (
    <>
      <PasswordInput
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
        {...args}
      />
    </>
  );
};

const args = {
  disabled: false,
  error: false,
  strengthIndicator: false,
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

export const StrengthIndicator = Template.bind({}) as Story;
StrengthIndicator.args = {
  ...args,
  strengthIndicator: true,
};
