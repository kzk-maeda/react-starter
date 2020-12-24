function add(a, b) {
  return a + b
}

function App() {
  const message = 'React';
  const attrs = {
    src: './logo.png',
    alt: 'react'
  }
  return (
    <div>
      <p>Hello {message}</p>
      <p>1 + 2 = {add(1, 2)}</p>
      <img {...attrs} />
    </div>
  );
}

export default App;
