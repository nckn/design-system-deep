/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function DocumentationTop(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      position="relative"
      padding="48px 82px 48px 82px"
      backgroundColor="rgba(19,19,19,1)"
      {...rest}
      {...getOverrideProps(overrides, "DocumentationTop")}
    >
      <Flex
        gap="20px"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 6")}
      >
        <Flex
          gap="32px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 4")}
        >
          <Text
            fontFamily="Helvetica"
            fontSize="12px"
            fontWeight="400"
            color="rgba(139,139,139,1)"
            lineHeight="18px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="-0.25px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Engine"
            {...getOverrideProps(overrides, "LEGO Education")}
          ></Text>
          <Flex
            gap="8px"
            direction="column"
            width="627px"
            height="101px"
            grow="1"
            basis="101px"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title2148")}
          >
            <Text
              fontFamily="Helvetica"
              fontSize="48px"
              fontWeight="400"
              color="rgba(247,247,247,1)"
              lineHeight="52px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="-0.57px"
              height="101px"
              grow="1"
              basis="101px"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Typography Tokens"
              {...getOverrideProps(overrides, "Title2157")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="32px"
          direction="column"
          justifyContent="center"
          shrink="0"
          height="151px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 5")}
        >
          <Flex
            gap="32px"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 40")}
          >
            <Text
              fontFamily="Helvetica"
              fontSize="12px"
              fontWeight="400"
              color="rgba(139,139,139,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="-0.25px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Engine Design System"
              {...getOverrideProps(overrides, "Engine Design System")}
            ></Text>
            <Text
              fontFamily="Helvetica"
              fontSize="12px"
              fontWeight="400"
              color="rgba(139,139,139,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="-0.25px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Last Updated: 02.09.22 – By: Niels Konrad"
              {...getOverrideProps(
                overrides,
                "Last Updated: 02.09.22 \u2013 By: Niels Konrad"
              )}
            ></Text>
          </Flex>
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="400"
            color="rgba(247,247,247,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="629px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Engine’s responsive layout grid has been designed for versatility and consistency across different devices, screen sizes and orientations. The grid is made up of fixed 20px gutters and fluid numbers of columns & margins width.&#xA;&#xA;More reading on our frontify."
            {...getOverrideProps(overrides, "Intro")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
