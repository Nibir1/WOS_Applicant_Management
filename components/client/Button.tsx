"use client";

import { Button as AriaButton } from 'react-aria-components';

import type { ReactNode } from 'react';
import type { PressHandler } from '@components/types';

import styles from './Button.module.scss';

export default ({
  onPress,
  disabled = false,

  children,
}: {
  onPress: PressHandler;
  disabled?: boolean;
  children: ReactNode;
}) => <AriaButton className={styles.button} onPress={onPress} isDisabled={disabled}>{ children }</AriaButton>
