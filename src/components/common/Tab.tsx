import { useState } from 'react';
import Typography from './Typography';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id:number) => {
    setActiveTab(id);
  };

  return (
    <div style={{width:'100%',justifyContent:'center'}}>
        <div className="tabs">
          <div style={{flexDirection:'column',margin:'0',width:'100%',alignItems:'center',justifyContent:'center'}} onClick={() => handleTabClick(1) }>
            <Typography fontWeight= {(activeTab==1) ? "bold" : "light"} className='inner-text' width='fit-content'>All Communities</Typography>
            <li className={activeTab === 1 ? 'active' : ''} ></li>
          </div>
          <div style={{flexDirection:'column',margin:'0',width:'100%',alignItems:'center',justifyContent:'center'}} onClick={() => handleTabClick(2) }>
            <Typography fontWeight= {(activeTab==2) ? "bold" : "light"} className='inner-text' width='fit-content'>Your Communities</Typography>
            <li className={activeTab === 2 ? 'active' : ''} ></li>
          </div>
        </div>

    </div>
  );
};

export default Tab;