import {SECRET_ACCESS_TOKEN} from '$env/static/private'
import type {PageServerLoad} from './$types';

const owner = 'zufall-labs';
const token = SECRET_ACCESS_TOKEN;

export const load: PageServerLoad = async ({}) => {
    const res = await fetch(`https://api.github.com/repos/${owner}/web/issues`, {
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });
    const data = await res.json();

    return {data};
}
