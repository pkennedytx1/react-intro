import './App.css';
import { CoffeeOrderForm } from './CoffeeOrderForm';
import CoffeeOrders from './CoffeeOrders';
import MakeOrder from './MakeOrder';
import RandomActivity from './RandomActivity';
import { useState } from 'react';
import { ThemeProvider } from './ThemeContext';

function App() {
  const [coffeeOrders, setCoffeeOrders] = useState([])
  return (
    <div className="App">
      <ThemeProvider>
        <CoffeeOrders coffeeOrders={coffeeOrders} />
        <CoffeeOrderForm setCoffeeOrders={setCoffeeOrders} coffeeOrders={coffeeOrders}/>
        <br />
        <MakeOrder coffeeOrders={coffeeOrders} setCoffeeOrders={setCoffeeOrders}/>
        <RandomActivity />
      </ThemeProvider>
    </div>
  );
}

export default App;
