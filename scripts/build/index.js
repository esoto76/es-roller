// @ts-nocheck
import { NormalizePath } from "@esoto/helpers";

export const GetBuildConfig = async (options) => {
  try {
    return NormalizePath(__dirname);
  } catch (e) {
    console.error(e);
  }
};
