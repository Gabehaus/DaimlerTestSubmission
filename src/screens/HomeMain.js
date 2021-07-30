import React, { useEffect, useState } from "react"

import { responseFromApi } from "../data.js"
import PrefixArray from "../components/PrefixArray"

const HomeMain = () => {
  const compArray = responseFromApi.data.dashboard.components
  const [sortedLocArray, setSortedLocArray] = useState([])
  const [prefixArray, setPrefixArray] = useState([])

  useEffect(() => {
    //copy component locations into an array and sort them

    const sortLocations = () => {
      setSortedLocArray(compArray.map(elem => elem.location).sort())
    }

    sortLocations()
  }, [compArray])

  useEffect(() => {
    const createPrefixArray = () => {
      const prefixes = []
      sortedLocArray.map(loc => {
        let locPrefix = loc.slice(0, 2)
        if (prefixes.indexOf(locPrefix) === -1) {
          prefixes.push(locPrefix)
        }
        return null
      })

      setPrefixArray([...prefixes])
    }

    createPrefixArray()
  }, [sortedLocArray])

  return (
    <div>
      <PrefixArray
        compArr={compArray}
        prefixArr={prefixArray}
        sortedLocArr={sortedLocArray}
      />
    </div>
  )
}

export default HomeMain
