'use strict'
const vision = require('node-cloud-vision-api')

vision.init({auth: 'AIzaSyAXkyEzPxP-i6nSHL0IuXmpGLQF9tAjohs'})

const req = new vision.Request({
  image: new vision.Image('../../downloads/asjfefjoi.jpeg'),
  features: [
    new vision.Feature('TEXT_DETECTION', 1),
    new vision.Feature('TYPE_UNSPECIFIED', 4),
    new vision.Feature('IMAGE_PROPERTIES', 5),
    new vision.Feature('LABEL_DETECTION', 10),
    new vision.Feature('LANDMARK_DETECTION', 10)
  ]
})

vision.annotate(req).then((res) => {
  console.log(JSON.stringify(res.responses));
  //console.log(JSON.stringify(res.responses[0].textAnnotations[0].description))
}, (e) => {
  console.log('Error: ', e)
})
