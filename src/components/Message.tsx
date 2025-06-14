type MessageProps = {
  text: string;
};

const Message = ({ text }: MessageProps) => {
  return <p>{text}</p>;
};

export default Message;