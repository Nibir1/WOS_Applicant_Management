import { TextInput } from './TextInput';

import type { TextInputProps } from './TextInput';

export type EmailInputProps = Omit<TextInputProps,
  'icon' |
  'type' |
  'inputMode' |
  'placeholder'
>;

export const EmailInput = (props:EmailInputProps) => (
  <TextInput {...props} 
    type='email'
    icon='email'
    inputMode='email'
    placeholder='john.doe@example.com'
    />
);
export default EmailInput;
