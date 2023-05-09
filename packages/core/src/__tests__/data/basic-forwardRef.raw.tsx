import { useStore } from '@builder.io/mitosis';

export interface Props {
  showInput: boolean;
  ref: HTMLInputElement;
}

export default function MyBasicForwardRefComponent(props: Props) {
  const state = useStore({
    name: 'PatrickJS',
  });

  return (
    <div>
      <input
        ref={props.ref}
        css={{
          color: 'red',
        }}
        value={state.name}
        onChange={(event) => (state.name = event.target.value)}
      />
    </div>
  );
}
