import React from "react";
import { ResponsiveLine } from '@nivo/line'

function SingleStockLineChart() {

    const dummyData = [
        {
          "id": "japan",
          "color": "hsl(93, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 185
            },
            {
              "x": "helicopter",
              "y": 234
            },
            {
              "x": "boat",
              "y": 187
            },
            {
              "x": "train",
              "y": 20
            },
            {
              "x": "subway",
              "y": 92
            },
            {
              "x": "bus",
              "y": 96
            },
            {
              "x": "car",
              "y": 144
            },
            {
              "x": "moto",
              "y": 31
            },
            {
              "x": "bicycle",
              "y": 175
            },
            {
              "x": "horse",
              "y": 108
            },
            {
              "x": "skateboard",
              "y": 152
            },
            {
              "x": "others",
              "y": 135
            }
          ]
        }]

    return (
        <ResponsiveLine
        data={dummyData}
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
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'set1' }}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        areaOpacity={0.15}
        enableCrosshair={false}
        crosshairType="cross"
        useMesh={true}
        legends={[]}
    />
    )

}

export default SingleStockLineChart;