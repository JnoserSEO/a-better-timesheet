import React from 'react'

const AddTd: React.FC<{ index: number }> = ({ index }) => <td key={index} className="add-td"><div className="add-div"><span className='add'>+</span></div></td>

export default AddTd