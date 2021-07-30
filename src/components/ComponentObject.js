import React, { useState } from "react"
// import { object } from "prop-types"
import TableBody from "./TableBody"
import RunTests from "./RunTests"
import PropTypes from "prop-types"

ComponentObject.propTypes = {
  compObj: PropTypes.object,
  compArr: PropTypes.array,
  prefixArr: PropTypes.array
}

function ComponentObject({ compObj, compArr, prefixArr }) {
  //the required result for task 1 is the compObj prop included in this component
  const [clickedPre, setClickedPre] = useState("AG")
  const firstPrefix = prefixArr[0]
  const firstLocation = Object.keys(compObj[firstPrefix]).sort()[0]
  const firstComponent = compObj[firstPrefix][firstLocation]

  const [selectedComp, setSelectedComp] = useState(firstComponent)

  const handlePrefixClick = e => {
    let firstLocationNewPrefix = Object.keys(compObj[e.target.value]).sort()[0]
    setClickedPre(e.target.value)
    setSelectedComp(compObj[e.target.value][firstLocationNewPrefix])
  }

  const handleLocationClick = e => {
    const location = e.target.value
    setSelectedComp(compObj[clickedPre][location])
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>
              Prefix
              <select onChange={handlePrefixClick}>
                {prefixArr.map(elem => (
                  <option key={elem} value={elem}>
                    {elem}
                  </option>
                ))}
              </select>
            </td>
            <td>
              Location
              <select onChange={handleLocationClick}>
                {Object.keys(compObj[clickedPre])
                  .sort()
                  .map(elem => (
                    <option key={elem} value={elem}>
                      {elem}
                    </option>
                  ))}
              </select>
            </td>
          </tr>
        </thead>
        <tbody>
          <TableBody selectedComp={selectedComp} />
        </tbody>
      </table>

      <RunTests compObj={compObj} prefixArr={prefixArr} />
    </>
  )
}

export default ComponentObject
