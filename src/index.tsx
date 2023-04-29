import { Attrs, render } from "xania";
import { Route, WebApp } from "xania/router";

import "./main.css";
import { Page } from "./components/page";
import { Layout } from "./layout";

function App() {
  return (
    <>
      <Attrs class="flex flex-col" />

      <Layout>
        <AppContainer>
          <Route path="dashboard">
            <Page class="flex-1">dashboard</Page>
          </Route>
          <Route path="kanban">
            <Page class="flex-1">kanban</Page>
          </Route>
        </AppContainer>
      </Layout>
    </>
  );
}

render(<App />, document.getElementById("app")!);

function AppContainer(props: { children: JSX.Children }) {
  return (
    <div class="border-box relative m-0 flex flex-auto flex-row overflow-auto bg-gray-100 p-0 align-middle dark:bg-gray-600">
      {props.children}
    </div>
  );
}
