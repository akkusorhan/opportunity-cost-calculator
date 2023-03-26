import React from "react";

import { ResponsivePie } from '@nivo/pie'

function PieChart({symbolList, primaryLineChartDataPoints}) {

    let dummyPieChartData = [
        {
          "id": "erlang",
          "label": "erlang",
          "value": 407,
          "color": "hsl(123, 70%, 50%)"
        },
        {
          "id": "stylus",
          "label": "stylus",
          "value": 347,
          "color": "hsl(157, 70%, 50%)"
        },
        {
          "id": "sass",
          "label": "sass",
          "value": 350,
          "color": "hsl(160, 70%, 50%)"
        },
        {
          "id": "ruby",
          "label": "ruby",
          "value": 329,
          "color": "hsl(8, 70%, 50%)"
        },
        {
          "id": "hack",
          "label": "hack",
          "value": 583,
          "color": "hsl(180, 70%, 50%)"
        }
    ]


    let pieChartData = []

    function Chart(data) {
        if (primaryLineChartDataPoints.length === symbolList.length) {
            for (let i = 0; i < symbolList.length; i++) {

                let symbolListId = symbolList[i].ticker;
                let getPieChartDataPoints = primaryLineChartDataPoints.find(obj => obj.id === symbolListId) 
                let pieChartEndValue = getPieChartDataPoints.data[getPieChartDataPoints.data.length - 1].y
                let modifiedPieChartEndValue = Math.round(pieChartEndValue * 100) / 100;

                let pieChartDataObject = {
                    "id": `${symbolListId}`, 
                    "label": `${symbolListId}`, 
                    "value": modifiedPieChartEndValue,
                }

                pieChartData.push(pieChartDataObject);


            }
        }

        return (
            <span className="pie-chart">
                <ResponsivePie
                data={data.data}
        margin={{ top: 10, right: 35, bottom: 110, left: 35 }}
        startAngle={-180}
        innerRadius={0.45}
        padAngle={2}
        cornerRadius={4}
        activeOuterRadiusOffset={8}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabel="id"
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#000000"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        motionConfig="wobbly"
        legends={[]}
        theme={{
            "textColor": "#FFFFFF", 
            "fontFamily": "poppins",
            "fontSize": "10px",
            
            "tooltip": {
                "container": {
                    "background": "#212121",
                    "color": "#ffffff", 
                    "fontSize": "10px"
  
                }}}}
            />
            </span>
            
        )
    }

    return (
        <>
            <Chart data={pieChartData}/>
        </>
    )

}

export default PieChart;