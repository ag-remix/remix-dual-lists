import {
  React,
  init_react,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-RSRAHOVA.js";

// browser-route-module:/sandbox/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
function Index() {
  var _a;
  const initialData = useLoaderData();
  const fetcher = useFetcher();
  const { countries, country, states } = (_a = fetcher.data) != null ? _a : initialData;
  const handleChange = (e) => {
    const params = new URLSearchParams();
    params.set("country", e.target.value);
    fetcher.load(`?index&${params.toString()}`);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold"
  }, "Remix Dual Lists!"), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4"
  }, /* @__PURE__ */ React.createElement("select", {
    name: "country",
    defaultValue: country,
    onChange: handleChange,
    size: 10
  }, countries.map((country2) => /* @__PURE__ */ React.createElement("option", null, country2))), /* @__PURE__ */ React.createElement("select", {
    name: "state",
    size: 10
  }, states.map((state) => /* @__PURE__ */ React.createElement("option", null, state)))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-PM2COA46.js.map
