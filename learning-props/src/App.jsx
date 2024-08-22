import ItemDisplay from './components/ItemDisplay'

function App() {
  let fruits = ['banana', 'mango', 'watermelon', 'orange']
  return <ul>
    {fruits.map(val=><ItemDisplay title={val}></ItemDisplay>)}
  </ul>
} 
export default App 