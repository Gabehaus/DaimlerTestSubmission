import React, { useEffect, useState } from "react"
import ComponentObject from "./ComponentObject"
import RemoveLocs from "./RemoveLocs"
import PropTypes from "prop-types"

PrefixArray.propTypes = {
  prefixArr: PropTypes.array,
  sortedLocArr: PropTypes.array,
  compArr: PropTypes.array
}

function PrefixArray({ prefixArr, sortedLocArr, compArr }) {
  const [compObj, setCompObj] = useState("")
  useEffect(() => {
    const prefixObj = {}
    if (prefixArr.length > 0) {
      prefixArr.map(elem => {
        prefixObj[elem] = {}
        return null
      })
    }

    compArr.map(comp => {
      const pre = comp.location.slice(0, 2)
      const location = comp.location
      if (prefixObj[pre]) {
        prefixObj[pre][location] = comp
      }

      return null
    })

    setCompObj(prefixObj)
  }, [prefixArr, compArr])

  return (
    <div style={{ background: "#d4d2fa", maxWidth: "65vw" }}>
      {Object.keys(compObj).length > 0 ? (
        <>
          <h1>Task 1</h1>
          <ComponentObject
            compObj={compObj}
            compArr={compArr}
            prefixArr={prefixArr}
          />
          <RemoveLocs
            compObj={compObj}
            compArr={compArr}
            prefixArr={prefixArr}
          />
        </>
      ) : null}
    </div>
  )
}

export default PrefixArray
