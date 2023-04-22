import { TextInput } from './TextInput';

import type { TextInputProps } from './TextInput';

export type PasswordInputProps = Omit<TextInputProps,
  'icon' |
  'type' |
  'inputMode' |
  'placeholder'
>;

export const PasswordInput = (props:PasswordInputProps) => (
  <TextInput {...props} 
    type='password'
    icon='key'
    inputMode='text'
    placeholder='un1qu3P455w0rd'
    />
);
export default PasswordInput;
