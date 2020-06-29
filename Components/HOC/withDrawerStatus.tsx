import React from "react";
import { useIsDrawerOpen } from "@react-navigation/drawer";

export const withDrawerStatus = (Component: any) => {
  return (props: any) => {
    const isDrawerOpen = useIsDrawerOpen();

    return <Component isDrawerOpen={isDrawerOpen} {...props} />;
  };
};
