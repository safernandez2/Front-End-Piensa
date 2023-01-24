import React from 'react';
import { Card } from 'antd';
import { Carousel } from 'antd';


const { Meta } = Card;
const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  
  const App: React.FC = () => (
    
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>Steven FDZ</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Pedro PGN</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Francisco HRD</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Project Piensa</h3>
    </div>
    </Carousel>
);


 const Cardsf: React.FC = () => (

<Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>

);

export default App;