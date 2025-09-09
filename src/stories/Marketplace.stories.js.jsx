import Marketplace from '../pages/Marketplace';
import { MemoryRouter } from 'react-router-dom';
const meta = {
    title: 'Pages/Marketplace',
    component: Marketplace,
    decorators: [
        (Story) => (<MemoryRouter>
        <Story />
      </MemoryRouter>)
    ]
};
export default meta;
export const Grid = {
    render: () => {
        localStorage.setItem('marketplaceView', 'grid');
        return <Marketplace />;
    }
};
export const List = {
    render: () => {
        localStorage.setItem('marketplaceView', 'list');
        return <Marketplace />;
    }
};
