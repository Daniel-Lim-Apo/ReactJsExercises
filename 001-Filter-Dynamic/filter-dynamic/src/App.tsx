import { useState } from 'react'
import './App.css'

function App() {
  
  const itemList = [
    "light red",
    "dark red",
    "blue",
    "light blue",
    "black"
  ]
  
  const [filterList, setFilterList] = useState(itemList);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  {

    if (event.target.value === ""){
      setFilterList(itemList);
      return;
    }

    const filteredValues = itemList.filter(
      (item) => 
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
    
  }
  return (
    <div className="app">
      <h1>Dynamic - Filter Search</h1>
      <div>Search 
        <input name="query" type="text"onChange={handleChange} />
      </div>
      {filterList && // Check is the filterList exists with content then map each item from its content
        filterList.map((item,index) => (
                 <div key={index} className="item">
                {item}
              </div>
            )
          )
      }
    </div>
  )
}

export default App
