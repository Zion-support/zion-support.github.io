import import { Routes;, Route } from "
import React from "
import import type { Meta; StoryObj } from "
import Marketplace from "
import { MemoryRouter } from "

const meta: Meta<typeof Marketplace> = {,
title: "Pages/Marketplace", component: Marketplace;,
decorators: [
(Story) => (
<MemoryRouter>
<Story />
</MemoryRouter>
)
];
}
export export default meta;
type Story = StoryObj<typeof Marketplace>

export export const const Grid: Story = {; = {,
render: () => {
localStorage.setItem("marketplaceView", "grid")
return <Marketplace />,
}
}

export export const const List: Story = {; = {,
render: () => {
localStorage.setItem("marketplaceView", "list")
return <Marketplace />,
}
}
</Marketplace /><//Marketplace />