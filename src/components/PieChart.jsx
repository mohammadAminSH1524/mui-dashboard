import { ResponsiveBar } from "@nivo/bar";
import { mockBarData, mockPieData } from "../data/mockData";
import { tokens } from "../theme";
import { useMediaQuery, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const is600 = useMediaQuery("(max-width:600px)");
  return (
    <ResponsivePie
      data={mockPieData}
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
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={10}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.gray[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      // enableArcLabels={false}
      // isInteractive={false}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#141414"
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={
        is600
          ? []
          : [
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: colors.gray[100],
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor:
                        theme.palette.mode === "dark" ? "#fff" : "#000",
                    },
                  },
                ],
              },
            ]
      }
    />
  );
};

export default PieChart;
