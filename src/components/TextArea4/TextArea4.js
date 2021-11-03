import React from "react";
import styled from "@emotion/styled/macro";
import { ReactComponent as Ballon } from "static/images/balao_4.svg";
import { ReactComponent as Question } from "static/images/interrogacao.svg";

const StyledTextArea = styled.textarea`
  width: 73%;
  resize: none;
  height: ${({ height }) => height ?? "88%"};
`;

const TextArea4 = ({ className, height, title, name, useRef, question, onChange = () => {} }) => {
  return (
    <div className="relative flex w-full">
      <label className="z-50 ml-8" htmlFor={name}>
        <div className="flex items-start mt-3">
          <Question width="2.5rem" />
          <div className="flex flex-col mt-3 pl-2">
            <span className="text-lg font-bold text-gray-900 uppercase">{title}</span>
            <span className="text-sm font-medium text-gray-900">{question}</span>
          </div>
        </div>
      </label>

      <Ballon className="absolute ml-4 z-0" height="60rem" />
      <StyledTextArea
        name={name}
        id={name}
        className={`absolute outline-none z-50 bg-transparent px-4 pt-4 mt-16 ml-16 ${className}`}
        onChange={(e) => onChange(e.currentTarget.value)}
        ref={useRef}
        height={height}
        maxLength="1000"
      />
    </div>
  );
};

export default TextArea4;
