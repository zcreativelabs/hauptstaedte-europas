
document.addEventListener("DOMContentLoaded", () => {

  d3.json("/countries.json")
    .then(countries => {
      d3.csv("/cities.csv")
        .then(cities => {

          // Geografische Formen sind in `countries.features`

          // Städtedaten sind in `cities`
          
          // ========================================

          // Definiere die Breite (width) und Höhe (height) deiner Visualisierung `800x600`

          // Hole den #viz container aus dem DOM mit `d3.select()`

          // Erstelle eine SVG node mit den Dimensionen `800x600`
    
          // Konfiguriere eine Kartenprojektion
    
          // Erstelle einene Pfadgenerator mit `d3.geoPath()`

          // Optional: Erstelle ein Gradnetz mit `d3.geoGraticule()()`

          // Binde `countries.features` an Pfade
    
          // Binde `cities` an Kreise

          // ========================================

        })
    })

})
