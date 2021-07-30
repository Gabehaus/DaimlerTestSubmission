import React, { useState } from "react"
import ObjectWithPrunedLocations from "./ObjectWithPrunedLocations"
import PropTypes from "prop-types"

RemoveLocs.propTypes = {
  compObj: PropTypes.object,
  compArr: PropTypes.array,
  prefixArr: PropTypes.array
}

function RemoveLocs({ compObj, compArr, prefixArr }) {
  const [possiblyPrunedObj, setPossiblyPrunedObj] = useState(compObj)
  const [propertiesToPrune, setPropertiesToPrune] = useState("")

  const handleChange = e => {
    setPropertiesToPrune(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (propertiesToPrune.length > 0) {
      let arr = propertiesToPrune.split(",")
      arr.map(elem => {
        let prefix = elem.slice(0, 2)
        let objCopy = { ...possiblyPrunedObj }
        delete objCopy[prefix][elem]
        setPossiblyPrunedObj(objCopy)
        return null
      })
    }
  }

  return (
    <div>
      <h1>Task 1b</h1>
      <h2>
        Enter comma separated locations without quotation marks or spaces - do
        not bound with array brackets - ex. AGAAA,AG008
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          value={propertiesToPrune}
          onChange={handleChange}
          placeholder='AGAAA,AG008'
        ></input>
        <button type='submit'>Delete Locations</button>
      </form>

      <ObjectWithPrunedLocations compObj={possiblyPrunedObj} />
    </div>
  )
}

export default RemoveLocs
