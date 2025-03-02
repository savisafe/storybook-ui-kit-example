import { Meta, StoryObj } from '@storybook/react';
import { AlertContainer, alert, Alert, AlertType } from '../components/Alert';
import { Button } from '../components';

const meta: Meta<typeof Alert> = {
  title: 'Component/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Тип алерта',
      options: ['error', 'success', 'info', 'warning'],
      control: 'select',
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
    message: {
      description: 'Сообщение алерта',
      control: 'text',
      defaultValue: 'Default message',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

const Template = (args: { message: string; type: AlertType }) => {
  const showAlert = (alertType: AlertType) => {
    switch (alertType) {
      case 'error':
        alert.error(args.message);
        break;
      case 'success':
        alert.success(args.message);
        break;
      case 'warning':
        alert.warning(args.message);
        break;
      case 'info':
        alert.info(args.message);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <AlertContainer />
      <Button size={'md'} variant={'tertiary'} onClick={() => showAlert(args.type)}>
        Click to show ALERT
      </Button>
    </div>
  );
};

export const Error = Template.bind({}) as Story;
Error.args = {
  type: 'error',
};

export const Warning = Template.bind({}) as Story;
Warning.args = {
  type: 'warning',
};

export const Success = Template.bind({}) as Story;
Success.args = {
  type: 'success',
};

export const Info = Template.bind({}) as Story;
Info.args = {
  type: 'info',
};
