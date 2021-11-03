import React from "react";
import styled from "@emotion/styled/macro";
import { ReactComponent as Ballon } from "static/images/balao_2.svg";
import { ReactComponent as Arrows } from "static/images/setas.svg";

const StyledTextArea = styled.textarea`
  width: 76%;
  resize: none;
  height: ${({ height }) => height ?? "50%"};
`;

const TextArea2 = ({ className, height, title, name, useRef, question, onChange = () => {} }) => {
  return (
    <div className="relative flex h-64 w-24-rem max-w-sm">
      <label className="z-50 w-full" htmlFor={name}>
        <div className="flex items-start mt-3">
          <Arrows width="4.5rem" />
          <div className="flex flex-col mt-3 pl-2 max-w-18-rem">
            <span className="text-lg font-bold text-gray-900 uppercase">{title}</span>
            <span className="text-sm font-medium text-gray-900">{question}</span>
          </div>
        </div>
      </label>

      <Ballon className="absolute ml-4 z-0" width="22rem" />
      <StyledTextArea
        name={name}
        id={name}
        className={`absolute outline-none z-50 bg-transparent px-4 pt-2 mt-24 ml-16 ${className}`}
        onChange={(e) => onChange(e.currentTarget.value)}
        ref={useRef}
        height={height}
        maxLength="250"
      />
    </div>
  );
};

export default TextArea2;
