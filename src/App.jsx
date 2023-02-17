import './App.css';
import { CoffeeOrderForm } from './CoffeeOrderForm';
import CoffeeOrders from './CoffeeOrders';
import MakeOrder from './MakeOrder';
import { useState } from 'react';

function App() {
  const [coffeeOrders, setCoffeeOrders] = useState([])
  console.log(coffeeOrders)
  return (
    <div className="App">
      <CoffeeOrders coffeeOrders={coffeeOrders} />
      <CoffeeOrderForm setCoffeeOrders={setCoffeeOrders} coffeeOrders={coffeeOrders}/>
      <br />
      <MakeOrder coffeeOrders={coffeeOrders} setCoffeeOrders={setCoffeeOrders}/>
    </div>
  );
}

export default App;
