"use client";

import { Button as AriaButton } from 'react-aria-components';

import type { ReactNode } from 'react';
import type { PressHandler } from '@components/types';

import styles from './Button.module.scss';

export default ({
  className = '',
  type = 'button',
  disabled = false,

  onPress,

  children,
}: {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;

  onPress: PressHandler;

  children: ReactNode;
}) => <AriaButton className={[styles.button, className].join(' ')}
  type={type}
  isDisabled={disabled}
  onPress={onPress} >
    { children }
</AriaButton>
