import Container from "./components/Container";
import Item from "./components/Item";
function App() {
  let items = ["banana", "mango", "coconut", "orange", "grapes"];

  return (
    <Container>
      <ul class="list-group ">
        {items.map((item) => {
          return <Item val={item} handleClick={() => console.log(`${item}`)}></Item>;
        })}
      </ul>
    </Container >
  );
}

export default App;
