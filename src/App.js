import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>만다라트 생성기 with GPT</h1>
      </div>
      <div className='content'>
        <h2>어떤 목표를 달성하고 싶나요?</h2>
        <div><input placeholder='여러분의 목표를 알려주세요.'></input></div>
        <button>만다라트 만들기</button>
      </div>
    </div>
  );
}

export default App;
