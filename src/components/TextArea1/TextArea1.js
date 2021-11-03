import React from "react";
import styled from "@emotion/styled/macro";
import { ReactComponent as Ballon } from "static/images/balao_1.svg";
import { ReactComponent as Star } from "static/images/estrela.svg";

const StyledTextArea = styled.textarea`
  width: 84%;
  resize: none;
  height: 62%;
`;

const TextArea1 = ({ title, name, useRef, question, onChange = () => {} }) => {
  return (
    <div className="relative flex h-64 w-36-rem max-w-xl">
      <label className="z-50 w-full" htmlFor={name}>
        <div className="flex items-start">
          <Star width="4rem" />
          <div className="flex flex-col mt-4 ml-2">
            <span className="text-lg font-bold text-gray-900 uppercase">{title}</span>
            <span className="text-sm font-medium text-gray-900 ">{question}</span>
          </div>
        </div>
      </label>

      <Ballon className="absolute ml-4 z-0" width="34rem" />
      <StyledTextArea
        name={name}
        id={name}
        className="absolute outline-none z-50 bg-transparent px-4 mt-20 ml-12"
        onChange={(e) => onChange(e.currentTarget.value)}
        ref={useRef}
        maxLength="350"
      />
    </div>
  );
};

export default TextArea1;
