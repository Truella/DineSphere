import React from 'react'

export default function AboutVideo() {
  return (
    <div className='mt-5 md:w-[40%] '><div
    style={{
      height: 0,
      paddingBottom: "calc(56.25%)",
      position: "relative",
      width: "100%",
    }}
  >
    <iframe
    className=' h-[100%] left-0 overflow-hidden absolute top-0 w-[100%]'
      allow="autoplay; gyroscope;"
      allowFullScreen
      height="100%"
      referrerPolicy="strict-origin"
      src="https://www.kapwing.com/e/67dbf21e1f6dcfcd90275cb3"
      title="Embedded content made on Kapwing"
      width="100%"
    ></iframe>
  </div>
  <p style={{ fontSize: "6px", textAlign: "right" }}>
    Video edited on{" "}
    <a href="https://www.kapwing.com/video-editor">Kapwing</a>
  </p></div>
  )
}
