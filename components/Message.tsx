interface MessageProps {
  text: string;
}

export const Message = ({ text }: MessageProps) => {
  return <div>{text}</div>;
};