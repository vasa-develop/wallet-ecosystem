'use client';

import { CodeBlock as ReactCodeBlock } from 'react-code-block';
import { useCopyToClipboard } from 'react-use';

export function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    // Logic to copy `code`
    copyToClipboard(code);
  };

  return (
    <ReactCodeBlock code={code} language={language}>
      <div className="relative">
        <ReactCodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <div className="table-row">
            <ReactCodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
            <ReactCodeBlock.LineContent className="table-cell">
              <ReactCodeBlock.Token />
            </ReactCodeBlock.LineContent>
          </div>
        </ReactCodeBlock.Code>

        <button
          className="bg-white rounded-full px-3.5 py-1.5 absolute top-2 right-2 text-sm font-semibold"
          onClick={copyCode}
        >
          {state.value ? 'Copied!' : 'Copy code'}
        </button>
      </div>
    </ReactCodeBlock>
  );
}

export function CodeBlockWithHightlight({
  code,
  language,
  lines,
}: {
  code: string;
  language: string;
  lines?: Array<number | string>;
}) {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    // Logic to copy `code`
    copyToClipboard(code);
  };

  return (
    <ReactCodeBlock code={code} language={language} lines={lines || []}>
      <div className="relative">
        <ReactCodeBlock.Code className="bg-gray-900 py-6 rounded-xl shadow-lg">
          {({ isLineHighlighted }) => (
            <div
              className={`table-row ${
                isLineHighlighted ? 'bg-violet-500/30' : 'opacity-60'
              }`}
            >
              <ReactCodeBlock.LineNumber
                className={`table-cell pl-6 pr-4 text-sm text-right select-none ${
                  isLineHighlighted ? 'text-gray-300' : 'text-gray-500'
                }`}
              />
              <ReactCodeBlock.LineContent className="table-cell w-full pr-6">
                <ReactCodeBlock.Token />
              </ReactCodeBlock.LineContent>
            </div>
          )}
        </ReactCodeBlock.Code>

        <button
          className="bg-white rounded-full px-3.5 py-1.5 absolute top-2 right-2 text-sm font-semibold"
          onClick={copyCode}
        >
          {state.value ? 'Copied!' : 'Copy code'}
        </button>
      </div>
    </ReactCodeBlock>
  );
}
