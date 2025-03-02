import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SearchInput from "./search-Input.tsx";

const meta: Meta<typeof SearchInput> = {
  title: "Component/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Тип поля",
      options: ["text", "number", "tel", "email", "date"],
      control: "select",
      table: {
        type: { summary: "string" },
      },
    },
    placeholder: {
      description: "Плейсхолдер",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    error: {
      description: "Состояние с ошибкой",
      table: {
        type: { summary: "boolean" },
      },
    },
    disabled: {
      description: "Заблокированное состояние",
      table: {
        type: { summary: "boolean" },
      },
    },
    caption: {
      description: "Подпись под полем",
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    className: {
      description: "Дополнительный класс",
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

const Template = (args) => {
  const [value, setValue] = useState<string>(args.value ?? "");
  return (
    <>
      <SearchInput
        placeholder="Поиск"
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

export const Base = Template.bind({}) as Story;
Base.args = {
  ...args,
};

export const With_error = Template.bind({}) as Story;
With_error.args = {
  ...args,
  error: true,
  caption: "Произошла ошибка!",
};

export const Disabled = Template.bind({}) as Story;
Disabled.args = {
  ...args,
  disabled: true,
};
