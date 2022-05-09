import React from "react"
import { Themed } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      This is where <Themed.a href="https://github.com/world-one">world-one</Themed.a>
      {` `}
      goes.
      <br />
      Or whatever, you make the rules!.
    </>
  )
}
