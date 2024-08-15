import React from "react";
import { processTransform2d } from "react-native-redash";
import { G, Text } from "react-native-svg";

import { RADIUS, center } from "./Quadrant";

const fontSize = 26;

export const Title = () => {
    const transformMatrix = processTransform2d([{ translateY: -RADIUS - 100 }]);

  const transformString = `matrix(${transformMatrix[0]},${transformMatrix[1]},${transformMatrix[2]},${transformMatrix[3]},${transformMatrix[4]},${transformMatrix[5]})`;

  return (
    <G transform={transformString}>
      <Text
        fontWeight="800"
        fontSize={fontSize}
        fill="black"
        x={center.x - RADIUS}
        y={center.y - fontSize / 2}
      >
        ENTER
      </Text>
      <Text
        fontWeight="800"
        fontSize={fontSize}
        fill="black"
        x={center.x - RADIUS}
        y={center.y + fontSize / 2}
      >
        PASSCODE
      </Text>
    </G>
  );
};

