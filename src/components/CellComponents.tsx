import React from 'react'
import { Cell } from '../model/Cell'

interface CellProps {
  cell: Cell
}

const CellComponents: React.FC<CellProps> = ({cell}) => {
  return (<div className={['cell', cell.color].join(' ')}>
    {cell.figure?.logo && <img src={cell.figure.logo} alt="123" />}
  </div>)
}

export default CellComponents