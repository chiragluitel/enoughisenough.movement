import { FaBriefcase, FaPlusCircle, FaUser } from "react-icons/fa";

const Impact = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          How Your Donation Helps
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="flex-shrink-0 text-red-500 mr-3">
              <FaPlusCircle />
            </span>
            <span>
              Medical Aid: Provide immediate medical care for those injured during the protests.
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 text-green-500 mr-3">
              <FaBriefcase />
            </span>
            <span>
              Legal Support: Help cover legal fees for those unjustly detained and their families.
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 text-red-500 mr-3">
              <FaUser />
            </span>
            <span>
              Community Relief: Support community-led initiatives providing food and shelter to displaced youths.
            </span>
          </li>
        </ul>
      </div>
    )
}

export default Impact;