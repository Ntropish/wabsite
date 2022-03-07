import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

hydrate(<RemixBrowser />, document);
