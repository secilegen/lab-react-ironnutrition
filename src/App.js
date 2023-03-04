import { useState } from 'react';
import './App.css';
import foods from "./foods.json"
import FoodBox from './components/FoodBox';
import {Divider, Row, Button} from 'antd'
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [foodList, setFoodList] = useState(foods)

  const addNewFood = (newFoodItem) => {
    const updatedFoodList = [ newFoodItem, ...foodList]
    setFoodList(updatedFoodList)
    console.log('Added item is:', newFoodItem)
  }

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood}/>

      {/* <Button> Hide Form / Add New Food </Button> */}
     
       <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foodList.map((food)=>{
        return(
        // <div>
        //   <p>{food.name}</p>
        //   <img src={food.image} width={80}/>
        //   </div>
        <FoodBox food={food} />
        )
      })}
      </Row>
    </div>
  );
}

export default App;
