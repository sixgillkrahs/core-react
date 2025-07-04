import { useCopyToClipboard } from "../../hooks";

const HomePage = () => {
  const [copyToClipboard, { value, success }] = useCopyToClipboard();
  return (
    <div>
      <button onClick={() => copyToClipboard("Hello, world!")}>
        Copy to clipboard
      </button>
      <div>{value}</div>
      <div>{success ? "Copied" : "Not copied"}</div>
    </div>
  );
};

export default HomePage;
