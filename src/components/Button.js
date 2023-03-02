import React, {memo} from 'react'

const Button = ({text, style}) => {
  return (
    <button
       type='button'
       className={style ? style : 'py-1 px-3 rounded-l-full rounded-r-full border '}
    >
        {text}
    </button>
  )
}

export default memo(Button)