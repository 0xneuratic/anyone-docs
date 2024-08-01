// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar
export {default} from '@docusaurus/Noop';
//import { PageFind } from "pagefind-react";

//function SearchHeader() {
//  return (
//<div>
//<link
//href="/_pagefind/pagefind-ui.css"
//rel="stylesheet"
//key="pagefind-ui-css"
///>
//<script
//src="/_pagefind/pagefind-ui.js"
//type="text/javascript"
//key="pagefind-ui-js"
///>
//<script
//src="/_pagefind/sc.js"
//type="text/javascript"
///>
//</div>
//  );
//}
//
//export default function Search() {
//  return (
//    <div>
//	<PageFind/>
//	<div id="search"></div>
//      </div>
//  );
//}