import { ResponsiveBar } from "@nivo/bar";
import { geoFeatures } from "../data/mockGeoFeutures";
import { tokens } from "../theme";
import { useMediaQuery, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const is1100 = useMediaQuery("(max-width:1100px)");
  const is1000 = useMediaQuery("(max-width:1000px)");
  const is900 = useMediaQuery("(max-width:900px)");
  const is800 = useMediaQuery("(max-width:800px)");
  const is700 = useMediaQuery("(max-width:700px)");
  const is600 = useMediaQuery("(max-width:600px)");
  const is500 = useMediaQuery("(max-width:500px)");
  const is400 = useMediaQuery("(max-width:400px)");
  const is450 = useMediaQuery("(max-width:450px)");
  return (
    <ResponsiveChoropleth
      data={mockGeographyData}
      features={geoFeatures.features}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.gray[100],
            },
          },
          legend: {
            text: {
              fill: colors.gray[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.gray[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.gray[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.gray[100],
          },
        },
        tooltip: {
          container: {
            color: colors.gray[100],
            backgroundColor:
              theme.palette.mode === "dark" ? "black" : "#fcfcfc",
          },
        },
      }}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      // colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      projectionScale={
        isDashboard
          ? 40
          : is400
          ? 50
          : is500
          ? 70
          : is600
          ? 80
          : is700
          ? 90
          : is800
          ? 110
          : is900
          ? 120
          : is1000
          ? 125
          : is1100
          ? 135
          : 150
      }
      valueFormat=".2s"
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      graticuleLineColor="#dddddd"
      borderWidth={1}
      borderColor="#fff"
      legends={
        isDashboard
          ? undefined
          : is700
          ? undefined
          : [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.gray[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor:
                        theme.palette.mode === "dark" ? "#fff" : "#000",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
    />
  );
};

export default GeographyChart;
