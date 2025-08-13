import React, { useState, useMemo } from "react";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { TrophyIcon } from "@heroicons/react/24/solid";
import SchoolMetrics from "../../components/dashboard_sections/SchoolMetrics";
import MonthlyStudentsChart from "../../components/dashboard_sections/MonthlyStudentsChart";

interface Student {
  rank: number;
  name: string;
  className: string;
  points: number;
  accuracy: number;
  streak: number;
  star: number;
  lessons: number;
  photo?: string;
}

const students: Student[] = [
  {
    rank: 1,
    name: "Student 1",
    className: "Class 8",
    points: 830,
    accuracy: 96,
    streak: 15,
    star: 30,
    lessons: 68,
  },
  {
    rank: 2,
    name: "Student 2",
    className: "Class 7",
    points: 295,
    accuracy: 94,
    streak: 16,
    star: 24,
    lessons: 50,
  },
  {
    rank: 3,
    name: "Student 3",
    className: "Class 6",
    points: 190,
    accuracy: 93,
    streak: 8,
    star: 14,
    lessons: 30,
  },
  {
    rank: 4,
    name: "Student 4",
    className: "Class 6",
    points: 150,
    accuracy: 92,
    streak: 7,
    star: 30,
    lessons: 40,
  },
  {
    rank: 5,
    name: "Student 5",
    className: "Class 6",
    points: 130,
    accuracy: 11,
    streak: 6,
    star: 23,
    lessons: 10,
  },
  {
    rank: 6,
    name: "Student 6",
    className: "Class 8",
    points: 110,
    accuracy: 51,
    streak: 6,
    star: 10,
    lessons: 30,
  },
  {
    rank: 7,
    name: "Student 7",
    className: "Class 8",
    points: 80,
    accuracy: 31,
    streak: 5,
    star: 20,
    lessons: 20,
  },
  {
    rank: 8,
    name: "Student 8",
    className: "Class 8",
    points: 50,
    accuracy: 21,
    streak: 4,
    star: 20,
    lessons: 20,
  },
  {
    rank: 9,
    name: "Student 9",
    className: "Class 7",
    points: 20,
    accuracy: 18,
    streak: 3,
    star: 2,
    lessons: 2,
  },
  {
    rank: 10,
    name: "Student 10",
    className: "Class 6",
    points: 10,
    accuracy: 21,
    streak: 1,
    star: 1,
    lessons: 1,
  },
];

export default function Home() {
  // State for search text and class filter
  const [searchText, setSearchText] = useState("");
  const [filterClass, setFilterClass] = useState("All");

  // Calculate leaderboard highlights
  const topScorer = students.reduce((prev, curr) =>
    curr.points > prev.points ? curr : prev
  );
  const longestStreak = students.reduce((prev, curr) =>
    curr.streak > prev.streak ? curr : prev
  );
  const mostLessons = students.reduce((prev, curr) =>
    curr.lessons > prev.lessons ? curr : prev
  );

  // Filtered students list based on search and filterClass
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch = student.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchesClass =
        filterClass === "All" || student.className === filterClass;
      return matchesSearch && matchesClass;
    });
  }, [searchText, filterClass]);

  return (
    <>
      <PageMeta
        title="React.js Students Dashboard"
        description="This is React.js Students Dashboard page"
      />
      <div className="max-w-full p-4">
        <h2 className="text-xl font-bold text-gray-700 flex items-center gap-2 dark:text-gray-200 mb-1">
          Greenwood Elementary School
        </h2>
        <p className="text-gray-500 mb-8 dark:text-gray-400 text-sm">
          Welcome Back School Admin! Here is your school's overview
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6">
          <SchoolMetrics />
          <MonthlyStudentsChart />
        </div>
      </div>

      {/* Leaderboard Section */}
      <div
        className="overflow-hidden rounded-2xl border border-gray-200 bg-white/90 px-4 pb-3 mt-10 pt-4 
                dark:border-gray-700 dark:bg-white/[0.03] dark:backdrop-blur-lg sm:px-6 shadow-lg"
      >
        <div className="max-w-full p-4">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-700 flex items-center gap-2 dark:text-gray-200 mb-1">
            🏆 School Leaderboard - Top 10 Champions
          </h2>
          <p className="text-gray-500 mb-8 dark:text-gray-400 text-sm">
            Our highest performing students this month with points and
            achievements
          </p>

          {/* Student Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {students.map((student) => (
              <div
                key={student.rank}
                className="relative flex flex-col items-center p-5 rounded-2xl border border-gray-200 
                     bg-white/90 shadow-md transition-all hover:shadow-xl hover:scale-[1.02]
                     dark:bg-white/1 dark:backdrop-blur-md dark:border-gray-700"
              >
                {student.rank <= 3 && (
                  <div
                    className={`absolute -top-5 -left-4 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold`}
                  >
                    {student.rank === 1 && (
                      <TrophyIcon className="w-8 h-8 absolute top-2 left-2 text-yellow-700 dark:text-yellow-300" />
                    )}
                    {student.rank === 2 && (
                      <TrophyIcon className="w-7 h-7 absolute top-2 left-2 text-gray-500 dark:text-gray-300" />
                    )}
                    {student.rank === 3 && (
                      <TrophyIcon className="w-6 h-6 absolute top-2 left-2 text-orange-600 dark:text-orange-300" />
                    )}
                  </div>
                )}

                {/* Rank Badge */}
                <div
                  className="absolute -top-3 -right-3 bg-gradient-to-tr from-blue-500 to-blue-400 
                          text-white w-8 h-8 flex items-center justify-center rounded-full 
                          text-sm font-bold shadow-md"
                >
                  # {student.rank}
                </div>

                {/* Avatar */}
                {student.photo ? (
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-16 h-16 rounded-full object-cover mb-3 border-4 border-white shadow-md"
                  />
                ) : (
                  <div
                    className="w-16 h-16 rounded-full bg-blue-200 dark:bg-blue-500/30 
                            flex items-center justify-center text-lg font-bold 
                            text-blue-700 dark:text-blue-300 border-4 border-white shadow-md mb-3"
                  >
                    {student.name[0]}
                  </div>
                )}

                {/* Name & Class */}
                <h3 className="text-sm font-semibold text-gray-800 text-center dark:text-gray-200 truncate w-full">
                  {student.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3 dark:text-gray-400">
                  {student.className}
                </p>

                {/* Points */}
                <div
                  className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold mb-2 
                          dark:bg-yellow-500/20 dark:text-yellow-300 shadow-sm"
                >
                  {student.points} pts
                </div>

                {/* Accuracy */}
                <div
                  className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs mb-2 
                          dark:bg-green-500/20 dark:text-green-300 shadow-sm"
                >
                  {student.accuracy}% Accuracy
                </div>
                <div className="flex fle-cloumn gap-2">
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-4 dark:text-gray-400">
                    ⭐ {student.star}
                  </div>

                  {/* Streak */}
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-4 dark:text-gray-400">
                    🟢 {student.streak} day streak
                  </div>
                </div>

                {/* View Profile */}
                <button
                  className="border border-gray-300 rounded-full px-4 py-1 text-xs font-medium text-gray-700 
                             hover:bg-gray-100 transition dark:border-gray-500 dark:text-gray-300 
                             dark:hover:bg-white/10 shadow-sm"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div
              className="flex flex-col items-center justify-center rounded-xl border border-yellow-200 
                      bg-yellow-50 p-5 shadow-md dark:bg-yellow-500/20 dark:border-yellow-400/30 
                      dark:backdrop-blur-md"
            >
              <span className="text-3xl mb-2">🏆</span>
              <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                Top Scorer
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {topScorer.name} - {topScorer.points} pts
              </p>
            </div>

            <div
              className="flex flex-col items-center justify-center rounded-xl border border-green-200 
                      bg-green-50 p-5 shadow-md dark:bg-green-500/20 dark:border-green-400/30 
                      dark:backdrop-blur-md"
            >
              <span className="text-3xl mb-2">🔥</span>
              <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                Longest Streak
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {longestStreak.name} - {longestStreak.streak} days
              </p>
            </div>

            <div
              className="flex flex-col items-center justify-center rounded-xl border border-blue-200 
                      bg-blue-50 p-5 shadow-md dark:bg-blue-500/20 dark:border-blue-400/30 
                      dark:backdrop-blur-md"
            >
              <span className="text-3xl mb-2">⚡</span>
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                Most Lessons
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {mostLessons.name} - {mostLessons.lessons} lessons
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* All Students Section */}
      <div
        className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white/90 px-4 pt-4 pb-6 
                dark:border-gray-700 dark:bg-white/[0.03] dark:backdrop-blur-lg shadow-lg"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">
              All Students
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Complete student directory with performance details
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search students..."
                className="pl-10 pr-4 py-2 rounded-xl border border-gray-300 text-sm text-gray-700 
                     bg-white dark:bg-white/1 dark:border-gray-600 dark:text-gray-200 
                     focus:ring-2 focus:ring-blue-500 outline-none"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </div>

            {/* Class Filter */}
            <div className="relative inline-block w-48">
              <select
                className="appearance-none w-full px-4 py-2 pr-10 rounded-xl border border-gray-300 bg-white text-sm text-gray-700 
               shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500 dark:focus:ring-blue-400 
               transition-all cursor-pointer"
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
              >
                <option
                  className="bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  value="All"
                >
                  All Classes
                </option>
                <option
                  className="bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  value="Class 6"
                >
                  Class 6
                </option>
                <option
                  className="bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  value="Class 7"
                >
                  Class 7
                </option>
                <option
                  className="bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  value="Class 8"
                >
                  Class 8
                </option>
              </select>
              {/* Down Arrow Icon */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-400 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Student List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {filteredStudents.length === 0 ? (
            <div>
              <h3 className="text-center py-6 dark:text-gray-400">
                No students found.
              </h3>
            </div>
          ) : (
            filteredStudents.map((student) => (
              <div
                key={student.rank}
                className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 
                   bg-white/90 shadow-sm hover:shadow-md transition dark:bg-white/1 
                   dark:border-gray-700 dark:backdrop-blur-md"
              >
                {/* Left - Avatar & Info */}
                <div className="flex items-center gap-3">
                  {student.photo ? (
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center 
                            text-lg font-bold text-blue-700 dark:bg-blue-500/30 dark:text-blue-300"
                    >
                      {student.name[0]}
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {student.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {student.className}
                    </p>
                  </div>
                </div>

                {/* Right - Stats */}
                <div className="flex flex-col items-end">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      student.accuracy >= 90
                        ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
                        : student.accuracy >= 80
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300"
                    }`}
                  >
                    {student.accuracy}%
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {student.points} XP
                  </span>
                </div>

                {/* Profile View Button */}
                <button className="ml-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button
            size="md"
            variant="outline"
            onClick={() => console.log("Load more clicked")}
          >
            Load More Students (233 remaining)
          </Button>
        </div>
      </div>
    </>
  );
}
