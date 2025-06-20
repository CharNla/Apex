import React from 'react';
import './wave.css';

const Apexcircle = () => {
  return (
    <div className="apex-atom-container">
      <div className="atom">
        <div className="nucleus">
          <button className="button">
            <span className="liquid"></span>
            <span className="btn-txt">Apex</span>
          </button>
        </div>
        {/* วงกลมสีชมพูพร้อมตัวอักษร */}
        <div className="apex-pink-circle circle-software">Software<br/>House</div>
        <div className="apex-pink-circle circle-it">IT<br/>Infrastructure</div>
        <div className="apex-pink-circle circle-monitor">Monitoring</div>
      </div>
    </div>
  );
};

export default Apexcircle;