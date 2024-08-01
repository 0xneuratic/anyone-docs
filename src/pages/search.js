import clsx from 'clsx';
import Layout from '@theme/Layout';
import { PageFind } from "pagefind-react";
import styles from './index.module.css';
function SearchHeader() {
  return (
    <div>
	 <link
          href="/_pagefind/pagefind-ui.css"
          rel="stylesheet"
          key="pagefind-ui-css"
        />
        <script
          src="/_pagefind/pagefind-ui.js"
          type="text/javascript"
          key="pagefind-ui-js"
        />
        <script
          src="/_pagefind/sc.js"
          type="text/javascript"
        />
      <div className="container">
      </div>
    </div>
  );
}

export default function Search() {
  return (
    <Layout>
        <SearchHeader />
      <main className="container">
	  <div className="col-md-6 mx-auto p-3 p-md-5 pagesfindes mt-5 mb-5">

<h3>Search Documentation</h3>
		<PageFind/>
		<div id="search"></div>
		</div>
      </main>
    </Layout>
  );
}

