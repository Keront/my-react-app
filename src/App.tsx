import Message from './components/Message';

function App() {
  const messageText = "сообщение";

  return (
    <div>
      <Message text={messageText} />
    </div>
  );
}

export default App;