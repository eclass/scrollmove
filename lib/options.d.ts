type behavior = "auto" | "smooth";
type block = "start" | "center" | "end" | "nearest";
type inline = "nearest" | "start" | "center" | "end";

export type optionsTypes = {
  behavior?: behavior;
  block?: block;
  inline?: inline;
};
