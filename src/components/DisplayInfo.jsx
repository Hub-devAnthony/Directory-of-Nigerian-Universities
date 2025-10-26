import Text from "./Typography";

const DisplayInfo = ({ name, type, state, year, website }) => {
  return (
    <div className="p-5 w-fit m-auto space-y-3 text-left text-lg font-semibold text-black">
      <p>
        University Name: <Text text={name} />
      </p>
      <p>
        University Type: <Text text={type} />
      </p>
      <p>
        Location: <Text text={state} />
      </p>
      <p>
        Year of Establishment: <Text text={year} />
      </p>
      <p>
        Official Website:
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-blue-600 underline"
        >
          {website}
        </a>
      </p>
    </div>
  );
};

export default DisplayInfo;
