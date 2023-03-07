import React from "react";
import { ResponsiveLine } from '@nivo/line'

const data = [
    {
      "id": "norway",
      "color": "hsl(5, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 224
        },
        {
          "x": "helicopter",
          "y": 169
        },
        {
          "x": "boat",
          "y": 246
        },
        {
          "x": "train",
          "y": 91
        },
        {
          "x": "subway",
          "y": 86
        },
        {
          "x": "bus",
          "y": 166
        },
        {
          "x": "car",
          "y": 31
        },
        {
          "x": "moto",
          "y": 146
        },
        {
          "x": "bicycle",
          "y": 107
        },
        {
          "x": "horse",
          "y": 69
        },
        {
          "x": "skateboard",
          "y": 254
        },
        {
          "x": "others",
          "y": 2
        },
      ]
    }
  ]

function Result( chartData, {/* make sure you pass in data prop */ }) {

    return (
    <div className="line-chart-container">

        
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
        lineWidth={3}
        pointSize={5}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderColor={{ from: 'color', modifiers: [] }}
        pointLabelYOffset={-12}
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
                    "fontSize": "12px"

                }}}}
    />
    </div>
)
}

export default Result;