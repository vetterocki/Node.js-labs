import {AxiosResponse} from "axios";
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const filename: string = process.argv.slice(2)[0];
const pagesDirname: string = path.basename(filename, '.json') + '_pages';
fs.mkdirSync(pagesDirname, {recursive: true});

const urls: string[] = require(`./${filename}`);
Promise.all(urls.map((url: string) => axios.get(url)))
    .then((responses: Array<AxiosResponse<string>>) => {
        responses.forEach((response: AxiosResponse<string>, index: number) => {
            const url: string = response.config.url!;
            const html: string = response.data;
            const pageFilename: string = path.join(pagesDirname, `page_${index + 1}.html`);
            fs.writeFileSync(pageFilename, html);
            console.log(`Saved ${url} to ${pageFilename}`);
        });
    })
    .catch((error: Error) => console.error(error));
