/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Breadcrumb(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Breadcrumb")}
    >
      <Text
        fontFamily="Helvetica"
        fontSize="12px"
        fontWeight="400"
        color="rgba(100,100,100,1)"
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
        children="Page 1"
        {...getOverrideProps(overrides, "Page 1")}
      ></Text>
      <Text
        fontFamily="Helvetica"
        fontSize="12px"
        fontWeight="400"
        color="rgba(100,100,100,1)"
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
        children="/"
        {...getOverrideProps(overrides, "/161209")}
      ></Text>
      <Text
        fontFamily="Helvetica"
        fontSize="12px"
        fontWeight="400"
        color="rgba(100,100,100,1)"
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
        children="Page 2"
        {...getOverrideProps(overrides, "Page 2")}
      ></Text>
      <Text
        fontFamily="Helvetica"
        fontSize="12px"
        fontWeight="400"
        color="rgba(19,19,19,1)"
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
        children="/"
        {...getOverrideProps(overrides, "/161213")}
      ></Text>
      <Text
        fontFamily="Helvetica"
        fontSize="12px"
        fontWeight="400"
        color="rgba(19,19,19,1)"
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
        children="Page 3"
        {...getOverrideProps(overrides, "Page 3")}
      ></Text>
    </Flex>
  );
}
