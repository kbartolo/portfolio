import { FC } from "react";
import { TextUnderlineProps } from "./types";
const TextUnderline: FC<TextUnderlineProps> = ({ text }) => {
  return (
    <p className="text-4xl font-bold inline border-b-4 border-pink-600">
      {text}
    </p>
  );
};

export default TextUnderline;
