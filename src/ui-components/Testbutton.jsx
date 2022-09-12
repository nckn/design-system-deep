/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Testbutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Button: {}, Testbutton: {} },
      variantValues: { property1: "lg" },
    },
    {
      overrides: {
        Button: { fontSize: "12px" },
        Testbutton: { width: "78px", height: "23px" },
      },
      variantValues: { property1: "sm" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="12px 24px 12px 24px"
      backgroundColor="rgba(19,19,19,1)"
      {...rest}
      {...getOverrideProps(overrides, "Testbutton")}
    >
      <Text
        fontFamily="Helvetica"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="20px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Button"
        {...getOverrideProps(overrides, "Button")}
      ></Text>
    </Flex>
  );
}
