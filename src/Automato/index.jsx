import React, { useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import styles from './styles.module.css'
export default function App() {
  const [width, setWith] = useState("100%");
  const [height, setHeight] = useState("50vw");
  const [graphData, setGraphData] = useState({
    nodes: [
      { data: { id: "1", label: "q0", type:"init"}, position: {x: -200, y: 50}},
      { data: { id: "2", label: "q1" }, position: {x: 100, y: -100}},
      { data: { id: "3", label: "qM" }, position: {x: -200, y: 300}},
      { data: { id: "4", label: "qA1" }, position: {x: 800, y: -100}},
      { data: { id: "5", label: "qA2" }, position: {x: 400, y: -150}},
      { data: { id: "6", label: "qA3" }, position: {x: 800, y: 250}},
      { data: { id: "7", label: "qA4" }, position: {x: 800, y: 550}},
      { data: { id: "8", label: "qA5" }, position: {x: -100, y: 550}},


    

    
    ],
    edges: [
        // Ligar a televisao
        {
           data: { source: "1", target: "2", label: "L"}, 
        },

        // Desligar a Televisao : inicio
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
        //  fim 


        //  Mutar
        {
            data: { source: "4", target: "3", label: "M"}
        },
        {
            data: { source: "2", target: "3", label: "M"}
        },
        {
            data: {source: "3", target: "3", label: "M"}
        },
        


        //  Aumentar e diminuir o volume transicoes: inicio
        {
            data: {source: "3", target: "4", label: "AV"}
        }, // do mutar para o volume 1
        {
            data: {source: "3", target: "5", label: "AV2"}
           // do mutar para o volume 2
        },
        {
            data: {source: "3", target: "6", label: "AV3"}
           // do mutar para o volume 3
        },

        {
            data: {source: "3", target: "7", label: "AV4"}
           // do mutar para o volume 4
        },
        {
            data: {source: "3", target: "8", label: "AV5"}
           // do mutar para o volume 5
        },

        {
            data: { source: "2", target: "4", label: "AV"}
        }, // do q1 para o volume 1 ( 0 para 1 )
        
        
        {
            data: { source: "2", target: "5", label: "AV2"}
        }, // do q1 para o volume 2 ( 0 para 2 )
                
        {
            data: { source: "2", target: "6", label: "AV3"}
        }, // do q1 para o volume 3 ( 0 para 3 )

        {
            data: { source: "2", target: "7", label: "AV4"}
        }, // do q1 para o volume 4 ( 0 para 4 )
        {
            data: { source: "2", target: "8", label: "AV5"}
        }, // do q1 para o volume 5 ( 0 para 5 )

        {
            data: { source: "4", target: "5", label: "AV"}
        },  // do qA1 para o qA2 (aumenta o volume em 1 unidade)

        {
            data: { source: "4", target: "6", label: "AV2"}
        },  // do qA1 para o qA3 (volume = 3)
        {
            data: { source: "4", target: "7", label: "AV3"}
        },  // do qA1 para o qA4 (volume = 4)
        {
            data: { source: "4", target: "8", label: "AV4"}
        },  // do qA1 para o qA4 (volume = 5)
        {
            data: { source: "4", target: "8", label: "AV5"}
        },  // do qA1 para o qA4 (volume = 5)

        {
            data: { source: "5", target: "6", label: "AV"}
        }, // do qA2 para o qA3(volume = 3)
        {
            data: { source: "5", target: "7", label: "AV2"}
        }, // do qA2 para o qA4(volume = 4)
        {
            data: { source: "5", target: "8", label: "AV3"}
        }, // do qA2 para o qA5(volume = 5)
        {
            data: { source: "5", target: "8", label: "AV4"}
        }, // do qA2 para o qA5(volume = 5)
        {
            data: { source: "5", target: "8", label: "AV5"}
        }, // do qA2 para o qA5(volume = 5)


        {
            data: { source: "6", target: "7", label: "AV"}
        }, // do qA3 para o qA4(volume = 4)
        
        {
            data: { source: "6", target: "8", label: "AV2"}
        }, // do qA3 para o qA5(volume = 5)
        {
            data: { source: "6", target: "8", label: "AV3"}
        }, // do qA3 para o qA5(volume = 5)
        {
            data: { source: "6", target: "8", label: "AV4"}
        }, // do qA3 para o qA5(volume = 5)
        {
            data: { source: "6", target: "8", label: "AV5"}
        }, // do qA3 para o qA5(volume = 5)



        {
            data: { source: "7", target: "8", label: "AV"}
        }, // do qA4 para o qA5(volume = 5)
        {
            data: { source: "7", target: "8", label: "AV2"}
        }, // do qA4 para o qA5(volume = 5)
        {
            data: { source: "7", target: "8", label: "AV3"}
        }, // do qA4 para o qA5(volume = 5)
        {
            data: { source: "7", target: "8", label: "AV4"}
        }, // do qA4 para o qA5(volume = 5)
        {
            data: { source: "7", target: "8", label: "AV5"}
        }, // do qA4 para o qA5(volume = 5)

        {
            data: {source: "8", target: "8", label: "AV"}
        }, // do qA5 para o qA5(volume = 5 pq satura)
        {
            data: {source: "8", target: "8", label: "AV2"}
        }, // do qA5 para o qA5(volume = 5 pq satura)

        {
            data: {source: "8", target: "8", label: "AV3"}
        }, // do qA5 para o qA5(volume = 5 pq satura)

        {
            data: {source: "8", target: "8", label: "AV4"}
        }, // do qA5 para o qA5(volume = 5 pq satura)

        {
            data: {source: "8", target: "8", label: "AV5"}
        }, // do qA5 para o qA5(volume = 5 pq satura)


        // diminuicao de volume: inicio
        {
            data: { source: "4", target: "2", label: "DV"}
        },
        {
            data: {source: "2", target: "2", label:"DV"}
        },
        {
            data: {source: "3", target: "3", label:"DV"}
        },
        {
            data: { source: "5", target: "4", label: "DV"}
        },
        {
            data: { source: "6", target: "5", label: "DV"}
        },
        {
            data: { source: "7", target: "6", label: "DV"}
        },

        {
            data: { source: "8", target: "7", label: "DV"}
        },
        // fim

        //  fim 

        // do qA1, qA2, qA3, qA4, qA5 para o mutar
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


        // trocar canal: inicio
        {
            data: {source: "2", target: "2", label: "TC"}
        },
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
    // fim
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
        selector: "node[type='init']",
        style:{
            shape:"circle",
            backgroundColor: "blue",
            borderSize: "20px"
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
            "font-size": "12px",
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
            maxZoom={5}
            minZoom={0.4}
            autounselectify={false}
            boxSelectionEnabled={false}
            stylesheet={styleSheet}
          />
        </div>
      </div>
    </>
  );
}
