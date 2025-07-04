import { Menu } from '@ark-ui/solid/menu'

export const RenderProp = () => (
  <Menu.Root>
    <Menu.Context>
      {(context) => <Menu.Trigger>Menu is {context().open ? 'open' : 'closed'}</Menu.Trigger>}
    </Menu.Context>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="react">React</Menu.Item>
        <Menu.Item value="solid">
          <Menu.ItemContext>
            {(context) => <>Solid is {context().highlighted ? 'highlighted' : 'not highlighted'}</>}
          </Menu.ItemContext>
        </Menu.Item>
        <Menu.Item value="vue">Vue</Menu.Item>
        <Menu.Item value="svelte">Svelte</Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
)
