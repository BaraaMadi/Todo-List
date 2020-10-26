import React from 'react';


 const ShowItems = (props) => {
     const { tasks , onDelete, toggleCompleted} = props;
    //  const checkedStyle = {textDecoration:" line-through"}

    
     const displayList = tasks.map( item => {
        return (
            <div key={item.id}>
                <input type="checkbox" onClick={()=>toggleCompleted(item.id)} />
                <span id="done" style={{textDecoration: item.completed && " line-through"}}>{item.task}</span>
                <span onClick={()=> onDelete(item.id)}>&times;</span>
            </div>
          )   
     });
    return (
      <div className="show-mylist">
        {displayList}
      </div>
    );
}

export default ShowItems;
