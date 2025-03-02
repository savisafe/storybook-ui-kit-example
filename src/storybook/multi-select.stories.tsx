import { StoryObj, Meta } from '@storybook/react';
import MultiSelect, { Props } from '../components/MultiSelect/MultiSelect.tsx';

const mockData = {
  tags: [
    { tag: 'Label 1' },
    { tag: 'Label 2' },
    { tag: 'Label 3' },
    { tag: 'Label 4' },
    { tag: 'Label 5' },
    { tag: 'Label 6' },
    { tag: 'Label 7' },
    { tag: 'Label 8' },
    { tag: 'Label 9' },
    { tag: 'Label 10' },
    { tag: 'Label 11' },
    { tag: 'Label 12' },
  ],
};

const meta: Meta<typeof MultiSelect> = {
  title: 'Component/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description: 'Плейсхолдер',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    caption: {
      description: 'Подпись под полем',
      control: 'text',
      table: {
        type: { summary: 'text' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

const Template = (args: Props) => {
  return (
    <>
      <div style={{ width: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <MultiSelect {...args} />
      </div>
    </>
  );
};

const args = {
  disabled: false,
  error: false,
  onChange: (tags) => {
    console.warn(tags);
  },
};

export const Base = Template.bind({}) as Story;
Base.args = {
  ...args,
  data: mockData.tags,
  defaultTags: mockData.tags,
};

export const With_placeholder = Template.bind({}) as Story;
With_placeholder.args = {
  ...args,
  data: mockData.tags,
  placeholder: 'Добавьте теги для статьи',
};

export const With_caption = Template.bind({}) as Story;
With_caption.args = {
  ...args,
  data: mockData.tags,
  caption: 'Важное сообщение.',
};

export const With_error = Template.bind({}) as Story;
With_error.args = {
  ...args,
  data: mockData.tags,
  error: true,
  caption: 'Произошла ошибка!',
};

export const Disabled = Template.bind({}) as Story;
Disabled.args = {
  ...args,
  data: mockData.tags,
  disabled: true,
};
