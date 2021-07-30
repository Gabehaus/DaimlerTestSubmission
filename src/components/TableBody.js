import React from "react"
import PropTypes from "prop-types"

TableBody.propTypes = {
  selectedComp: PropTypes.object
}

function TableBody({ selectedComp }) {
  return (
    <>
      {Object.keys(selectedComp).map(elem => (
        <tr key={elem}>
          <td>{elem + " : "}</td>
          <td style={{ maxWidth: "50vw", minWidth: "50vw" }}>
            {selectedComp[elem].toString()}
          </td>
        </tr>
      ))}
    </>
  )
}

export default TableBody
