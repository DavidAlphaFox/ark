<script module lang="ts">
  import type { Assign, HTMLProps, PolymorphicProps, RefAttribute } from '$lib/types'

  export interface ComboboxControlBaseProps extends PolymorphicProps<'div'>, RefAttribute {}
  export interface ComboboxControlProps extends Assign<HTMLProps<'div'>, ComboboxControlBaseProps> {}
</script>

<script lang="ts">
  import { mergeProps } from '@zag-js/svelte'
  import { Ark } from '../factory'
  import { useComboboxContext } from './use-combobox-context'

  let { ref = $bindable(null), ...props }: ComboboxControlProps = $props()

  const combobox = useComboboxContext()
  const mergedProps = $derived(mergeProps(combobox().getControlProps(), props))
</script>

<Ark as="div" bind:ref {...mergedProps} />
