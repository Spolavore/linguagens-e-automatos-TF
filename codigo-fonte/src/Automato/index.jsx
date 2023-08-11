import React, { useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import styles from './styles.module.css'
export default function App() {
  const [width, setWith] = useState("100%");
  const [height, setHeight] = useState("50vw");
  const [graphData, setGraphData] = useState({
    nodes: [
      { data: { id: "1", label: "q0" }, position: {x: -200, y: 50}},
      { data: { id: "2", label: "q1" }, position: {x: 100, y: -100}},
      { data: { id: "3", label: "qM" }, position: {x: -200, y: 300}},
      { data: { id: "4", label: "qA1" }, position: {x: 400, y: -40}},
      { data: { id: "5", label: "qA2" }, position: {x: 400, y: 150}},
      { data: { id: "6", label: "qA3" }, position: {x: 400, y: 250}},
      { data: { id: "7", label: "qA4" }, position: {x: 400, y: 350}},
      { data: { id: "8", label: "qA5" }, position: {x: 400, y: 450}},


    

    
    ],
    edges: [
        // Ligar a televisao
        {
           data: { source: "1", target: "2", label: "L"}, 
        },

        // Desligar a Televisao
        {
            data: { source: "1", target: "1", label: "D"}, 
         },

         {
            data: { source: "2", target: "1", label: "D"}
        },

        {
            data: { source: "3", target: "1", label: "D"}
        },

        {
            data: { source: "4", target: "1", label: "D"}
        },

        {
            data: { source: "5", target: "1", label: "D"}
        },

        {
            data: { source: "6", target: "1", label: "D"}
        },

        {
            data: { source: "7", target: "1", label: "D"}
        },
        
        {
            data: { source: "8", target: "1", label: "D"}
        },
        //  Mutar
        {
            data: { source: "2", target: "3", label: "M"}
        },

        // Desmutar
        {
            data: { source: "3", target: "4", label: "DM"}
        },

   


        //  Aumentar e diminuir o volume transicoes
        {
            data: { source: "2", target: "4", label: "AV"}
        },
        {
            data: { source: "4", target: "2", label: "DV"}
        },

        
        {
            data: { source: "4", target: "5", label: "AV"}
        },
        {
            data: { source: "5", target: "4", label: "DV"}
        },

        {
            data: { source: "5", target: "6", label: "AV"}
        },
        {
            data: { source: "6", target: "5", label: "DV"}
        },

        {
            data: { source: "6", target: "7", label: "AV"}
        },
        {
            data: { source: "7", target: "6", label: "DV"}
        },
        {
            data: { source: "7", target: "8", label: "AV"}
        },

        {
            data: { source: "8", target: "7", label: "DV"}
        },

        // do qA1, qA2, qA3, qA4, qA5 para o mutar

        {
            data: { source: "4", target: "3", label: "M"}
        },
        {
            data: { source: "5", target: "3", label: "M"}
        },
        {
            data: { source: "6", target: "3", label: "M"}
        },
        {
            data: { source: "7", target: "3", label: "M"}
        },
        {
            data: { source: "8", target: "3", label: "M"}
        },
        // trocar canal
        {
            data: { source: "3", target: "3", label: "TC"}
        },
        {
            data: { source: "4", target: "4", label: "TC"}
        },

        {
            data: { source: "5", target: "5", label: "TC"}
        },
        {
            data: { source: "6", target: "6", label: "TC"}
        },
        {
            data: { source: "7", target: "7", label: "TC"}
        },
        {
            data: { source: "8", target: "8", label: "TC"}
        },
    ]
  });

 

 

  const layout = {
    name: "preset",
    fit: true,
    // circle: true,
    directed: true,
    padding: 50,
    // spacingFactor: 1.5,
    animate: true,
    animationDuration: 1000,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false
  }


  const styleSheet = [
    {
        selector: "nodes",
        style: {
            
            label: "data(label)",
            width: 30,
            height: 30,
            "font-size": "10px",
            "z-index": "10",
            "color": "red",
            "background-color": "yellow"
            
        }
    },
    {
        selector: "edges",
        style:{
            width: 3,
            "target-arrow-color": "grey",
            
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
            label: "data(label)",
            "font-size": "15px",
            "z-index": "20px",
            "font-weight": "bold",
            
        }
    }
    ]

  return (
    <>
      <div className={styles.main}>
        <h1>Autômato</h1>
        <div
          style={{
            border: "1px solid",
            backgroundColor: "#f5f6fe"
          }}
        >
          <CytoscapeComponent
            elements={CytoscapeComponent.normalizeElements(graphData)}
            // pan={{ x: 200, y: 200 }}
            layout={layout}
            style={{ width: width, height: height }}
            zoomingEnabled={true}
            maxZoom={3}
            minZoom={0.1}
            autounselectify={false}
            boxSelectionEnabled={false}
            stylesheet={styleSheet}
          />
        </div>
      </div>
    </>
  );
}
