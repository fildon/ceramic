import * as React from "react";

interface Reanimator {
  ref: React.RefObject<HTMLElement>;
}

export const useReanimator = (deps: React.DependencyList): Reanimator => {
  const ref = React.createRef<HTMLElement>();
  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.style.animation = "none";
    ref.current.offsetHeight;
    ref.current.style.animation = "";
  }, deps);

  return { ref };
};
