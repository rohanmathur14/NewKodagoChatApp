import React, { useEffect, useRef } from 'react';

import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';

import $ from 'jquery'; // Import jQuery here


const Select2Wrapper = ({ options, defaultValue, onChange }) => {

  const selectRef = useRef(null);

  useEffect(() => {
    $(selectRef.current).select2(); // Initialize Select2 on component mount

    // Handle the change event and call the provided onChange callback
    $(selectRef.current).on('change', (e) => {
      const selectedValue = e.target.value;
      onChange(selectedValue);
    });

    // Destroy Select2 instance when the component unmounts
    return () => {
      $(selectRef.current).select2('destroy');
    };
  }, [onChange]);

  return (
    <Select2
      className="form-control"
      defaultValue={defaultValue}
      data={options} // Use 'data' prop instead of 'options'
      onSelect={(e) => {
        const selectedValue = e.target.value;
        onChange(selectedValue);
      }}
    />
  );
};

//export default Select2Wrapper;
export { Select2Wrapper }; // Use named export here
