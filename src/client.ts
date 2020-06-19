import * as sapper from "@sapper/app"; // eslint-disable-line import/no-unresolved

// testing type loading
import { stores } from "@sapper/app";

const {page} = stores();
//  types are loaded...
//        page: Readable<{
//        host: string,
//        path: string,
//        params: {[key: string]: string},
//        query: {[key: string]: number|string}
//      }>,
if (page) {} // silence unused variable

sapper.start({
	target: document.querySelector("#sapper") as Node,
});
