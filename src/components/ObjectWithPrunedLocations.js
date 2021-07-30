import React from "react"

function ObjectWithPrunedLocations({ compObj }) {
  return (
    <div>
      <pre>{JSON.stringify(compObj, null, 4)}</pre>
    </div>
  )
}

export default ObjectWithPrunedLocations
