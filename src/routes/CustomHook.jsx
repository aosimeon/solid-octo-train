import useCustomHook from "../hooks/useCustomHooks";
import MetaTags from 'react-meta-tags';

export default function CustomHook() {
  const [increment, decrement, reset, setValue, data] = useCustomHook();

  return (
    <>
      <div>
        <MetaTags>
          <title>Custom Hooks</title>
          <meta name="description" content="React custom hooks" />
        </MetaTags>
        <h1>Custom hook page</h1>
        <p>{ data }</p>
        <button onClick={() => increment()}>Increase</button>
        <button onClick={() => decrement()}>Decrease</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => setValue(new Error())}>Test error boundary</button>
      </div>
    </>
  );
}
