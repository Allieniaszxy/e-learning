import { Laptop2Icon } from "lucide-react";
import { FaPaintBrush } from "react-icons/fa";
import { MdBusiness, MdScience } from "react-icons/md";
import { TbHealthRecognition } from "react-icons/tb";

export default function Categories() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-16 py-12">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-10">
          Browse by Category
        </h1>

        {/* Category Grid */}
        <section
          className="
            grid
            grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
            gap-5 sm:gap-8 lg:gap-10
            justify-items-center
          "
        >
          {/* Category Card */}
          <div className="w-full max-w-[220px] sm:max-w-60 lg:max-w-[260px] h-[130px] sm:h-[150px] rounded-xl bg-gray-100 flex flex-col items-center justify-center hover:bg-indigo-50 hover:shadow-md transition-all duration-200">
            <Laptop2Icon className="text-blue-500 w-10 h-10 sm:w-12 sm:h-12 mb-3" />
            <h3 className="font-semibold text-base sm:text-lg">Technology</h3>
          </div>

          <div className="w-full max-w-[220px] sm:max-w-60 lg:max-w-[260px] h-[130px] sm:h-[150px] rounded-xl bg-gray-100 flex flex-col items-center justify-center hover:bg-indigo-50 hover:shadow-md transition-all duration-200">
            <FaPaintBrush className="text-blue-500 w-10 h-10 sm:w-12 sm:h-12 mb-3" />
            <h3 className="font-semibold text-base sm:text-lg">
              Creative Arts
            </h3>
          </div>

          <div className="w-full max-w-[220px] sm:max-w-60 lg:max-w-[260px] h-[130px] sm:h-[150px] rounded-xl bg-gray-100 flex flex-col items-center justify-center hover:bg-indigo-50 hover:shadow-md transition-all duration-200">
            <MdBusiness className="text-blue-500 w-10 h-10 sm:w-12 sm:h-12 mb-3" />
            <h3 className="font-semibold text-base sm:text-lg">Business</h3>
          </div>

          <div className="w-full max-w-[220px] sm:max-w-60 lg:max-w-[260px] h-[130px] sm:h-[150px] rounded-xl bg-gray-100 flex flex-col items-center justify-center hover:bg-indigo-50 hover:shadow-md transition-all duration-200">
            <TbHealthRecognition className="text-blue-500 w-10 h-10 sm:w-12 sm:h-12 mb-3" />
            <h3 className="font-semibold text-base sm:text-lg">
              Health & Wellness
            </h3>
          </div>

          <div className="w-full max-w-[220px] sm:max-w-60 lg:max-w-[260px] h-[130px] sm:h-[150px] rounded-xl bg-gray-100 flex flex-col items-center justify-center hover:bg-indigo-50 hover:shadow-md transition-all duration-200">
            <MdScience className="text-blue-500 w-10 h-10 sm:w-12 sm:h-12 mb-3" />
            <h3 className="font-semibold text-base sm:text-lg">Science</h3>
          </div>
        </section>
      </div>
    </div>
  );
}
