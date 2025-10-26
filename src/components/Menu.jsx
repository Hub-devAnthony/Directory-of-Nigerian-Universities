import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Divider = () => {
  return <div className="w-4/5 border-t border-gray-400"></div>;
};

const WidgetMenu = ({ handleCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const switchCategory = ({ category }) => {
    // handleCategoryChange(category);
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-2 w-fit m-auto">
      <button
        onClick={handleOpenMenu}
        className="ml-4 p-2 relative rounded-lg bg-gray-900 text-white transition duration-300 ease-out"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="h-60 w-36 mt-3 ml-6 absolute border-2 border-gray-400 rounded-lg shadow-sm flex flex-col items-center justify-evenly">
          <Button onClick={switchCategory} btnText="Federal" primary />

          <Divider />
          <Button onClick={switchCategory} btnText="State" secondary />

          <Divider />
          <Button onClick={switchCategory} btnText="Private" tertiary />
        </div>
      )}
    </div>
  );
};

export default WidgetMenu;
