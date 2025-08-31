import Marketplace from "../pages/Marketplace";
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
        localStorage.setItem('marketplaceView',
  'grid');
        return <Marketplace />;
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
};
export const List = {
  render: () => {
        localStorage.setItem('marketplaceView',
  'list');
        return <Marketplace />;
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
};
}}