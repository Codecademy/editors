import React from 'react';
import {
  Box
} from '@codecademy/gamut';
import type { languageOption } from './consts';

export type CopyButtonMode = 'hide' | undefined;

type EditorProps = {
  copyButtonMode?: CopyButtonMode;
  language: languageOption;
  text: string;
  onChange: Function;
};

export const Editor: React.FC<EditorProps> = ({
  text
}) => {
  return (
      <Box>{text}</Box>
  );
};
