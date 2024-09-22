import { useState } from 'react'
import * as styles from './FilterContentButton.css'
interface fcbProps {
  size: 50 | 100
  content: string
}
const FilterContentButton = ({ size, content }: fcbProps) => {
  return (
    <div className={styles.OuterContainer} style={{ width: `${size}%` }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="9.5" stroke="#777777" />
        <path
          d="M8 11L11 14.5L16.5 9"
          stroke="#777777"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {content}
    </div>
  )
}
export default FilterContentButton
