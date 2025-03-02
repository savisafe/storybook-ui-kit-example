import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Textarea from '../components/Textarea/Textarea.tsx';

const meta: Meta<typeof Textarea> = {
  title: 'Component/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    caption: {
      description: 'Подпись под полем',
      control: 'text',
      table: {
        type: { summary: 'text' },
      },
    },
    disabled: {
      description: 'Заблокированное состояние',
      table: {
        type: { summary: 'boolean' },
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
      description: 'Состояние c ошибкой',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

const Template = (args) => {
  const [value, setValue] = useState<string>(args.value ?? '');
  return (
    <>
      <Textarea
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
};

export const Default = Template.bind({}) as Story;
Default.args = {
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
