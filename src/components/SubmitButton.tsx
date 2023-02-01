import React from 'react'
import './SubmitButton.css'

interface Props {
  text: string;
}

const SubmitButton: React.FC<Props> = ({ text }) => {
  return (
    <button type="submit" className="submitBtn">
      {text}
    </button>
  )
}

export default SubmitButton
