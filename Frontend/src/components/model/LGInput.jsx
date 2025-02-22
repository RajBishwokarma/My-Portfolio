
import React, { useState } from 'react';
import { LGInputLogic } from '../../logics/LGInputLogic';

const LGInput = (props) => {
  const { id, type, placeHolder, min, max } = props;
  const [isFocused, setIsFocused] = useState(false); 

  return (
    <div id={id+'con'}
        className={`w-full border rounded-full px-4 p-1 ${isFocused ? 'border-violet-500' : 'border-gray-300'}`}>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeHolder}
        required
        minLength={min}
        maxLength={max}
        className='w-full outline-none'
        onChange={() => LGInputLogic(id)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default LGInput;
