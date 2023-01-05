import {
  Category,
  Component,
  Palette,
  Variant,
} from "@react-buddy/ide-toolbox";
import React from "react";

export const PaletteTree = () => (
  <Palette>
    <Category name="HTML">
      <Component name="a">
        <Variant requiredParams={["href"]}>
          <a>Link</a>
        </Variant>
      </Component>
      <Component name="button">
        <Variant>
          <button>Button</button>
        </Variant>
      </Component>
    </Category>
  </Palette>
);
