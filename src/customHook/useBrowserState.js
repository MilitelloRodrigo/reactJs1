import React from "react";

export default function useBrowserState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const browserState = window.localStorage.getItem(key);
    return browserState !== null ? JSON.parse(browserState) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
