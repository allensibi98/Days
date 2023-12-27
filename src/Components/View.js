import React from 'react';
import '../styles/View.css';
import ViewHeader from './ViewHeader';

function View() {

  const divs = generateDivs(25);

  return (
    <div className='view-container'>
      <ViewHeader />
      <div className='divs-container'>
        {divs.map((item, ind) => item)}
      </div>
    </div>
  )
}

export default View;

const generateDivs = (count) => {
  // Function to generate a random height and width for each div
  const getRandomSize = () => ({
    height: `${Math.floor(Math.random() * 100) + 150}px`,
    width: `${Math.floor(Math.random() * 100) + 100}px`,
  });

  const divsArray = [];

  for (let i = 0; i < count; i++) {
    const { height, width } = getRandomSize();
    divsArray.push(
      <div key={i} style={{ height, width, backgroundColor: '#e0e0e0', margin: '5px' }}>
        {`Div ${i + 1}`}
      </div>
    );
  }

  return divsArray;
};