// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: June 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-04-Julianne-Leblanc-Peltier/sw.js", {
    scope: "/ICD2O-Unit-6-04-Julianne-Leblanc-Peltier/",
  })
}

window.onload = function () {
  const params = new URLSearchParams(document.location.search)
  // input
  const radius = params.get("radius")
  console.log(radius)

  if (radius >= 0) {
    // process
    const volume = 4 / 3 * Math.PI * (radius ** 3)
    //output
    document.getElementById("radiusAnswer").innerHTML = radius + " mm<sup>3</sup> <br /><br />"
    document.getElementById("answer").innerHTML = "the volume of the sphere is: " + volume.toFixed(2) + "mm<sup>3</sup>"
  } else {
    document.getElementById("answer").innerHTML = "Invalid number"
  }
}
