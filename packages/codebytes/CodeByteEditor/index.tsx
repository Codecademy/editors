
import { Background, system } from '@codecademy/gamut-styles';
import styled from '@emotion/styled';
import React, { useState } from 'react';


import type { languageOption } from './consts';

interface CodeByteEditorProps {
  on?: Record<CodebyteEvent, Function>
}

type CodebyteEvent = 'edit' | 'language_select' | 'copy' | 'run';

export const CodeByteEditor: React.FC<CodeByteEditorProps> = ({language, text: initialText, copyButtonMode}) => {
  const [text, setText] = useState<string>(initialText);

  const [hasBeenEdited, setHasBeenEdited] = useState(false);
  return (
    <>
        <Editor
          language={language}
          text={text}
          copyButtonMode={copyButtonMode}
          onChange={(newText: string) => {
            setText(newText);
            const { renderMode } = getOptions();
            if (!renderMode && hasBeenEdited === false) {
              setHasBeenEdited(true);
            }
          }}
      />
    </>
  );
};

export default CodeByteEditor;
