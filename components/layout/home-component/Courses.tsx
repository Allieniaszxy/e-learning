"use client";

import Image from "next/image";

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  instructor: string;
  role: string;
  ratings: string;
  reviews: string;
}

const courses: CourseCardProps[] = [
  {
    image: "/images/python-bg.jpg",
    title: "Advanced Python for Data Science",
    description:
      "Master data manipulation, analysis, and machine learning with Python.",
    instructor: "John Doe",
    role: "Lead Data Scientist",
    ratings: "4.8",
    reviews: "4,832 ratings",
  },
  {
    image: "/images/pmp-course.jfif",
    title: "Project Management Professional (PMP)",
    description:
      "Prepare for the PMP exam with comprehensive lessons and expert insight.",
    instructor: "Michael Brown",
    role: "Certified PMP Tutor",
    ratings: "4.7",
    reviews: "7,105 ratings",
  },
  {
    image: "/images/cybersecurity-course.jfif",
    title: "Cybersecurity Fundamentals",
    description:
      "Understand the essential principles of cybersecurity to protect your business assets.",
    instructor: "Emily White",
    role: "Chief Information Security Officer",
    ratings: "4.9",
    reviews: "3,987 ratings",
  },
];

export default function PopularCourses() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Popular Courses for Professionals
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100"
          >
            <div className="relative w-full h-48 sm:h-52 md:h-56">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>

              {/* Instructor Info */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                  {course.instructor.split(" ")[0][0]}
                  {course.instructor.split(" ")[1][0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{course.instructor}</p>
                  <p className="text-xs text-gray-500">{course.role}</p>
                </div>
              </div>

              <p className="text-sm text-gray-700">
                ⭐ <span className="font-semibold">{course.ratings}</span> (
                {course.reviews})
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
