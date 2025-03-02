import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Select, { SelectOption } from '../components/Select/Select.tsx';

const options: SelectOption[] = [
  { title: 'Охота', id: '1' },
  { title: 'Рыбалка', id: '2' },
  { title: 'Экипировка', id: '3' },
  { title: 'Снаряжение', id: '4' },
];

const meta: Meta<typeof Select> = {
  title: 'Component/Select',
  component: Select,
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
    label: {
      description: 'Метка',
      control: 'text',
      table: {
        type: { summary: 'text' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const Template = (args) => {
  const [value, setValue] = useState<string>(args.value ?? '');
  return (
    <>
      <div style={{ width: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <Select onInputChange={setValue} value={value} {...args} selectOptions={options} />
      </div>
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

export const With_label = Template.bind({}) as Story;
With_label.args = {
  ...args,
  label: 'Input label',
};

export const With_options = Template.bind({}) as Story;
With_options.args = {
  ...args,
  selectOptions: options,
};
