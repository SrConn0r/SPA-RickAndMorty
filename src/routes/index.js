import header from '../template/header';
import home from '../pages/home';
import character from '../pages/character';
import error404 from '../pages/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/' : home,
    '/:id' : character,
    '**' : error404
}

const router = async () => {
    const headerDiv = null || document.getElementById('header');
    const contentDiv = null || document.getElementById('content');

    headerDiv.innerHTML = await header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : error404;

    contentDiv.innerHTML = await render();
}

export default router;