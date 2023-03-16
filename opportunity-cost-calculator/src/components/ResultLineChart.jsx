import React from "react";

import { ResponsiveLine } from '@nivo/line'

function ResultLineChart() {

    const data = [
        {
          "id": "japan",
          "color": "hsl(316, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 135
            },
            {
              "x": "helicopter",
              "y": 286
            },
            {
              "x": "boat",
              "y": 11
            },
            {
              "x": "train",
              "y": 208
            },
            {
              "x": "subway",
              "y": 27
            },
            {
              "x": "bus",
              "y": 254
            },
            {
              "x": "car",
              "y": 279
            },
            {
              "x": "moto",
              "y": 14
            },
            {
              "x": "bicycle",
              "y": 34
            },
            {
              "x": "horse",
              "y": 292
            },
            {
              "x": "skateboard",
              "y": 293
            },
            {
              "x": "others",
              "y": 92
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(23, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 121
            },
            {
              "x": "helicopter",
              "y": 162
            },
            {
              "x": "boat",
              "y": 4
            },
            {
              "x": "train",
              "y": 217
            },
            {
              "x": "subway",
              "y": 64
            },
            {
              "x": "bus",
              "y": 268
            },
            {
              "x": "car",
              "y": 190
            },
            {
              "x": "moto",
              "y": 127
            },
            {
              "x": "bicycle",
              "y": 110
            },
            {
              "x": "horse",
              "y": 46
            },
            {
              "x": "skateboard",
              "y": 97
            },
            {
              "x": "others",
              "y": 115
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(45, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 23
            },
            {
              "x": "helicopter",
              "y": 162
            },
            {
              "x": "boat",
              "y": 297
            },
            {
              "x": "train",
              "y": 285
            },
            {
              "x": "subway",
              "y": 27
            },
            {
              "x": "bus",
              "y": 82
            },
            {
              "x": "car",
              "y": 58
            },
            {
              "x": "moto",
              "y": 69
            },
            {
              "x": "bicycle",
              "y": 40
            },
            {
              "x": "horse",
              "y": 78
            },
            {
              "x": "skateboard",
              "y": 55
            },
            {
              "x": "others",
              "y": 61
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(168, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 263
            },
            {
              "x": "helicopter",
              "y": 266
            },
            {
              "x": "boat",
              "y": 54
            },
            {
              "x": "train",
              "y": 178
            },
            {
              "x": "subway",
              "y": 95
            },
            {
              "x": "bus",
              "y": 13
            },
            {
              "x": "car",
              "y": 135
            },
            {
              "x": "moto",
              "y": 268
            },
            {
              "x": "bicycle",
              "y": 11
            },
            {
              "x": "horse",
              "y": 207
            },
            {
              "x": "skateboard",
              "y": 195
            },
            {
              "x": "others",
              "y": 15
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(339, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 171
            },
            {
              "x": "helicopter",
              "y": 20
            },
            {
              "x": "boat",
              "y": 55
            },
            {
              "x": "train",
              "y": 98
            },
            {
              "x": "subway",
              "y": 199
            },
            {
              "x": "bus",
              "y": 182
            },
            {
              "x": "car",
              "y": 298
            },
            {
              "x": "moto",
              "y": 95
            },
            {
              "x": "bicycle",
              "y": 223
            },
            {
              "x": "horse",
              "y": 99
            },
            {
              "x": "skateboard",
              "y": 177
            },
            {
              "x": "others",
              "y": 134
            }
          ]
        }
      ]


    return(
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
          }}
          yFormat=" >-.2f"
          curve="natural"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              orient: 'bottom',
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'transportation',
              legendOffset: 36,
              legendPosition: 'middle'
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 0,
              tickPadding: 10,
              tickRotation: 0,
              legend: 'count',
              legendOffset: -40,
              legendPosition: 'middle'
          }}
          enableGridX={false}
          enableGridY={false}
          colors={{ scheme: 'nivo', }}
          lineWidth={2}
          pointSize={5}
          pointColor={{ from: 'color', modifiers: [] }}
          pointBorderColor={{ from: 'color', modifiers: [] }}
          pointLabelYOffset={-12}
          enableSlices="x"
          enableCrosshair={false}
          useMesh={true}
          legends={[]}
          motionConfig="stiff"
          theme={{
              "textColor": "#FFFFFF", 
              "fontFamily": "poppins",
              
              "tooltip": {
                  "container": {
                      "background": "#212121",
                      "color": "#ffffff", 
                      "fontSize": "10px"
  
                  }}}}
      />
    )

}

export default ResultLineChart