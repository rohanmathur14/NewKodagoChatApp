import React, { useState } from 'react';
// import TimePicker from 'react-time-picker';






 
const TimePickers  = () => {

  const [selectedTime, setSelectedTime] = useState('00:00:00');

  const handleChange = (time) => {
    setSelectedTime(time);
  };

return (
    <>
      <div className="input-group mb-3">
      {/* <TimePicker
        onChange={handleChange}
        value={selectedTime}
        format="hh:mm:ss a"
      /> */}
    </div>
    </>
  );
};

export default TimePickers ;
