import React from 'react';
import './style.css';


const Panel = ({ className, name, setOpenClass }) => (
            <div onClick={setOpenClass(name)} className={className} style={{ backgroundImage: `url(../src/images/${name}.jpg)` }} >
              <span> {name} </span>
            </div>
);

export default Panel;
