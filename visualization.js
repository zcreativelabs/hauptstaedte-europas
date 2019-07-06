
document.addEventListener("DOMContentLoaded", () => {

  d3.json("/countries.json")
    .then(countries => {
      d3.csv("/cities.csv")
        .then(cities => {

          // Geografische Formen sind in `countries.features`

          // Städtedaten sind in `cities`
          
          // ========================================

          // Definiere die Breite (width) und Höhe (height) deiner Visualisierung `800x600`
          const width = 800
          const height = 600

          // Hole den #viz container aus dem DOM mit `d3.select()`
          const container = d3.select("#viz")

          // Erstelle eine SVG node mit den Dimensionen `800x600`
          const svg = container.append("svg")
            .attr("width", width)
            .attr("height", height)
          
          // Konfiguriere eine Kartenprojektion
          const projection = d3.geoAzimuthalEqualArea()
            .rotate([-10.0, -52.0])
            .translate([width / 2, height / 2])
            .scale(700)
            .precision(.1)
    
          // Erstelle einene Pfadgenerator mit `d3.geoPath()`
          const pathGenerator = d3.geoPath().projection(projection)

          // Optional: Erstelle ein Gradnetz mit `d3.geoGraticule()()`
          const graticule = d3.geoGraticule()()

          const graticulePath = svg.append("path")
            .attr("d", pathGenerator(graticule))
            .attr("stroke", "#DDD")
            .attr("stroke-width", 0.5)
            .attr("fill", "transparent")

          // Binde `countries.features` an Pfade
          const shapes = svg.selectAll("path")
            .data(countries.features)
            .enter()
            .append("path")
              .attr("d", pathGenerator)
              .attr("fill", "#EEE")
              .attr("stroke", "#FFF")

          // Binde `cities` an Kreise
          const circles = svg.selectAll("circle")
            .data(cities)
            .enter()
            .append("circle")
              .attr("cx", city => projection([city.lon, city.lat])[0])
              .attr("cy", city => projection([city.lon, city.lat])[1])
              .attr("r", city => city.size)
              .attr("fill", "rgba(0,0,0,0.3)")

          // ========================================

        })
    })

})
