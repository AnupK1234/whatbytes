import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

const UpdateScoresModal = ({ isOpen, setIsOpen }) => {
  const { userData, setUserData } = useContext(UserContext);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSave = () => {
    console.log("Updated Data:", userData); 
    toggleModal();
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Update Scores</h2>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                alt="HTML Icon"
                className="w-10 h-10"
              />
            </div>

            <form className="space-y-4">
              {/* Rank */}
              <div className="flex items-center space-x-4">
                <div className="text-blue-600 font-bold">1</div>
                <label className="flex-grow">
                  <span className="font-medium">Update your Rank</span>
                  <input
                    type="number"
                    name="rank"
                    value={userData.rank || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>

              {/* Percentile */}
              <div className="flex items-center space-x-4">
                <div className="text-blue-600 font-bold">2</div>
                <label className="flex-grow">
                  <span className="font-medium">Update your Percentile</span>
                  <input
                    type="number"
                    name="percentage"
                    value={userData.percentage || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>

              {/* Current Score */}
              <div className="flex items-center space-x-4">
                <div className="text-blue-600 font-bold">3</div>
                <label className="flex-grow">
                  <span className="font-medium">
                    Update your Current Score (out of 15)
                  </span>
                  <input
                    type="number"
                    name="correct"
                    value={userData.correct || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                  />
                </label>
              </div>
            </form>

            {/* Actions */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 border border-gray-400 rounded-md text-gray-600"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateScoresModal;
