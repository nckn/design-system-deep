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
export default function Label(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Adidas: {}, Label: {} },
      variantValues: { property1: "Small" },
    },
    {
      overrides: { Adidas: {}, Label: { padding: "3px 11px 3px 11px" } },
      variantValues: { property1: "Large" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="2px"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(19,19,19,1)"
      borderRadius="4px"
      padding="1px 7px 1px 7px"
      {...rest}
      {...getOverrideProps(overrides, "Label")}
    >
      <Text
        fontFamily="Helvetica"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
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
        children="Adidas"
        {...getOverrideProps(overrides, "Adidas")}
      ></Text>
    </Flex>
  );
}
