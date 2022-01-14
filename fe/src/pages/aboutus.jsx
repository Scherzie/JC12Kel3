import React, { Component } from "react"

class AboutUs extends Component {
  state = {}
  render() {
    return (
      <div
        className=""
        style={{
          position: "relative",
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginLeft: 30,
            marginTop: 30,
            fontSize: 13,
            lineHeight: 17,
          }}
        >
          <a href="/"> Home </a>
          <span> / </span>
          About
          <h1>About Us</h1>
        </div>
        <div>
          <img
            src={require("../assets/18_02_2021_profile.jpg__800x900_q85_crop-smart_subject_location-2055,1037_subsampling-2.jpg")}
          />
        </div>
      </div>
    )
  }
}

export default AboutUs
