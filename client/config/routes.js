// Routes
import Home from '../routes/Home';
import NotFound from '../routes/NotFound';

// Route config
const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        component: NotFound
    }
];

export default routes;
