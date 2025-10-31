import Button from "./Button";

const ActionButtons = ({ page, length }) => {
  const goToPrevUniversity = () => {};

  const goToNextUniversity = () => {};

  return (
    <div className="p-5 w-fit m-auto flex space-x-4">
      <Button onClick={goToPrevUniversity} btnText="Previous" primary />

      <Button onClick={goToNextUniversity} btnText="Next" secondary />

      <div className="h-10 w-fit px-5 bg-black flex items-center text-white text-sm font-medium rounded-lg shadow-sm">
        Showing {page} of {length}
      </div>
    </div>
  );
};

export default ActionButtons;
