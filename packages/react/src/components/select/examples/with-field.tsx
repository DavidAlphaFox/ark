import * as select from '@zag-js/select'
import { ChevronDownIcon } from 'lucide-react'
import { Field, Select } from '../..'

export const WithField = (props: Field.RootProps) => {
  const collection = select.collection({ items: ['React', 'Vue', 'Angular'] })

  return (
    <Field.Root {...props}>
      <Select.Root collection={collection}>
        <Select.Label>Label</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <ChevronDownIcon />
            </Select.Indicator>
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item key={item} item={item}>
                <Select.ItemText>{item}</Select.ItemText>
                <Select.ItemIndicator>✓</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
        <Select.HiddenSelect />
      </Select.Root>
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
