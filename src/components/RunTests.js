import React, { useEffect, useState } from "react"
import { responseFromApi } from "../data"
import PropTypes from "prop-types"

RunTests.propTypes = {
  compObj: PropTypes.object,
  prefixArr: PropTypes.array
}

function RunTests({ compObj, prefixArr }) {
  const origCompArray = responseFromApi.data.dashboard.components
  const apiComponentsLength = origCompArray.length
  const [testOneResult, setTestOneResult] = useState("test incomplete")
  const [testTwoResult, setTestTwoResult] = useState("test incomplete")

  useEffect(() => {
    // Test1 = Number of components in API response (origCompArray) equals number of components
    //   in new component object (compObj)

    const test1 = () => {
      let numbComponentsInNewObject = 0
      prefixArr.map(elem => {
        numbComponentsInNewObject += Object.keys(compObj[elem]).length
        return null
      })

      if (numbComponentsInNewObject === apiComponentsLength) {
        setTestOneResult("passed")
      }

      if (numbComponentsInNewObject !== apiComponentsLength) {
        setTestOneResult("failed")
      }
    }

    // Test2 = Each component in new component object (compObj) containing a specific location value is identical to each component containing that same location value in the original API response object

    const test2 = () => {
      //create array containing all components in new component object (compObj)
      let arrayWithAllComponentsOfNewComponentObj = []

      prefixArr.map(prefix => {
        const valuesArr = Object.values(compObj[prefix])
        arrayWithAllComponentsOfNewComponentObj = [
          ...arrayWithAllComponentsOfNewComponentObj,
          ...valuesArr
        ]

        return null
      })

      //create array containing all locations of objects in new component object (compObj)
      let locationsOfNewObj = []
      prefixArr.map(prefix => {
        const locationsArr = Object.keys(compObj[prefix])
        locationsOfNewObj = [...locationsOfNewObj, ...locationsArr]
        return null
      })

      //compare arrayWithAllComponentsOfNewComponentObj to origCompArray
      let matchResults = []

      //map through locations and find components (which contain each location) in new and old component array
      locationsOfNewObj.map(location => {
        let newComp = arrayWithAllComponentsOfNewComponentObj.filter(
          comp => comp.location === location
        )[0]

        let oldComp = origCompArray.filter(
          comp => comp.location === location
        )[0]

        //push results of each comparison of components containing identical location values
        matchResults.push(newComp === oldComp)
        return null
      })

      //check for any failures in results array
      if (
        !matchResults.includes(false) &&
        matchResults.length === origCompArray.length
      ) {
        setTestTwoResult("passed")
      } else {
        setTestTwoResult("failed")
      }
    }

    test1()
    test2()
  }, [apiComponentsLength, compObj, prefixArr, origCompArray])
  return (
    <div
      style={{
        background: "white",
        paddingTop: "10vh",
        wordWrap: "break-word"
      }}
    >
      <h1>Task 1a</h1>
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ maxWidth: "50vw", minWidth: "50vw" }}>
              Number of components in API response equals number of components
              in new component object{" "}
            </td>
            <td>{testOneResult}</td>
          </tr>
          <tr>
            <td style={{ maxWidth: "50vw", minWidth: "50vw" }}>
              Each component in new component object (compObj) containing a
              specific location value is identical to each component containing
              that same location value in the original API response object{" "}
            </td>
            <td>{testTwoResult}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RunTests
