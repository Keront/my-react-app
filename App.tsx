import { Message } from './src/components/Message.tsx';

function App() {
  const messageText = "Привет, это мое первое React-приложение!";
  
  return (
    <div> 
      <Message text={messageText} />
    </div>
  );
}

export default App;