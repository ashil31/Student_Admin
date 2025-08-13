import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Button from "../../ui/button/Button";
import { TrophyIcon } from "@heroicons/react/24/solid";

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
  month?: string;
}



const students: Student[] = [
  { rank: 1, name: "Student 1", className: "Class 8", points: 830, accuracy: 96, streak: 15, star: 30, lessons: 68, month: "January" },
  { rank: 2, name: "Student 2", className: "Class 7", points: 295, accuracy: 94, streak: 16, star: 24, lessons: 50, month: "January" },
  { rank: 3, name: "Student 3", className: "Class 6", points: 190, accuracy: 93, streak: 8, star: 14, lessons: 30, month: "February" },
  { rank: 4, name: "Student 4", className: "Class 6", points: 150, accuracy: 92, streak: 7, star: 30, lessons: 40, month: "January" },
  { rank: 5, name: "Student 5", className: "Class 6", points: 130, accuracy: 11, streak: 6, star: 23, lessons: 10, month: "March" },
  { rank: 6, name: "Student 6", className: "Class 8", points: 110, accuracy: 51, streak: 6, star: 10, lessons: 30, month: "January" },
  { rank: 7, name: "Student 7", className: "Class 8", points: 80, accuracy: 31, streak: 5, star: 20, lessons: 20, month: "March" },
  { rank: 8, name: "Student 8", className: "Class 8", points: 50, accuracy: 21, streak: 4, star: 20, lessons: 20, month: "January" },
  { rank: 9, name: "Student 9", className: "Class 7", points: 20, accuracy: 18, streak: 3, star: 2, lessons: 2, month: "March" },
  { rank: 10, name: "Student 10", className: "Class 6", points: 10, accuracy: 21, streak: 1, star: 1, lessons: 1, month: "February" },
];

export default function StudentsRankingTable() {
  const [searchText, setSearchText] = useState("");
  const [filterClass, setFilterClass] = useState("All");
  const [filterMonth, setFilterMonth] = useState("All");

  const classes = useMemo(() => ["All", ...Array.from(new Set(students.map(s => s.className)))], []);
  const months = useMemo(() => ["All", ...Array.from(new Set(students.map(s => s.month).filter(Boolean)))], []);

  const filteredStudents = useMemo(
    () =>
      students.filter(
        (s) =>
          s.name.toLowerCase().includes(searchText.toLowerCase()) &&
          (filterClass === "All" || s.className === filterClass) &&
          (filterMonth === "All" || s.month === filterMonth)
      ),
    [searchText, filterClass, filterMonth]
  );

  const firstPlace = students.find((s) => s.rank === 1);
  const secondPlace = students.find((s) => s.rank === 2);
  const thirdPlace = students.find((s) => s.rank === 3);

  return (
    <>
      {/* Champions Podium */}
      <div className="flex justify-center items-end gap-12 mb-10">
        {/* Second Place */}
        {secondPlace && (
          <div className="flex flex-col items-center">
            <div className="relative">
              {secondPlace.photo ? (
                <img src={secondPlace.photo} alt={secondPlace.name} className="w-20 h-20 rounded-full object-cover shadow-sm" />
              ) : (
                <div className="w-20 h-20 mb-4 rounded-full bg-blue-200 dark:bg-blue-500/30 flex items-center justify-center text-lg font-bold text-blue-700 dark:text-blue-300 shadow-sm">
                  {secondPlace.name[0]}
                </div>
              )}
              <TrophyIcon className="w-8 h-8 absolute -top-4 left-11 text-gray-500" />
            </div>
            <div className="w-20 h-32 bg-gray-300 dark:bg-gray-700 rounded-t-lg flex flex-col items-center justify-center relative shadow-md">
              <span className="text-4xl font-bold text-gray-700 dark:text-gray-300">2</span>
            </div>
            <div className="mt-2 text-center">
              <p className="font-semibold text-gray-800 dark:text-gray-200">{secondPlace.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{secondPlace.className}</p>
              <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">{secondPlace.points} pts</p>
            </div>
          </div>
        )}

        {/* First Place */}
        {firstPlace && (
          <div className="flex flex-col items-center">
            <div className="relative">
              {firstPlace.photo ? (
                <img src={firstPlace.photo} alt={firstPlace.name} className="w-20 h-20 rounded-full object-cover shadow-sm" />
              ) : (
                <div className="w-25 h-25 mb-4 rounded-full bg-blue-200 dark:bg-blue-500/30 flex items-center justify-center text-lg font-bold text-blue-700 dark:text-blue-300 shadow-sm">
                  {firstPlace.name[0]}
                </div>
              )}
              <TrophyIcon className="w-10 h-10 absolute -top-4 left-15 text-yellow-700 dark:text-yellow-300" />
            </div>
            <div className="w-24 h-40 bg-yellow-400 dark:bg-yellow-600 rounded-t-lg flex flex-col items-center justify-center relative shadow-lg border-4 border-yellow-300 dark:border-yellow-500">
              <span className="text-5xl font-bold text-yellow-900 dark:text-yellow-100">1</span>
            </div>
            <div className="mt-3 text-center">
              <p className="font-semibold text-gray-900 dark:text-white">{firstPlace.name}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{firstPlace.className}</p>
              <p className="text-lg font-bold text-yellow-800 dark:text-yellow-300">{firstPlace.points} pts</p>
            </div>
          </div>
        )}

        {/* Third Place */}
        {thirdPlace && (
          <div className="flex flex-col items-center">
            <div className="relative">
              {thirdPlace.photo ? (
                <img src={thirdPlace.photo} alt={thirdPlace.name} className="w-20 h-20 rounded-full object-cover shadow-sm" />
              ) : (
                <div className="w-20 h-20 mb-4 rounded-full bg-blue-200 dark:bg-blue-500/30 flex items-center justify-center text-lg font-bold text-blue-700 dark:text-blue-300 shadow-sm">
                  {thirdPlace.name[0]}
                </div>
              )}
              <TrophyIcon className="w-7 h-7 absolute -top-4 left-11 text-orange-600 dark:text-orange-300" />
            </div>
            <div className="w-16 h-28 bg-orange-300 dark:bg-orange-600 rounded-t-lg flex flex-col items-center justify-center relative shadow-md">
              <span className="text-3xl font-bold text-orange-800 dark:text-orange-200">3</span>
            </div>
            <div className="mt-1 text-center">
              <p className="font-semibold text-gray-800 dark:text-gray-200">{thirdPlace.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{thirdPlace.className}</p>
              <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">{thirdPlace.points} pts</p>
            </div>
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="overflow-auto rounded-xl bg-white dark:bg-white/[0.03] p-4">
        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <input
            type="text"
            placeholder="Search student by name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="mb-3 sm:mb-0 px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white w-full sm:w-64"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              { value: filterClass, set: setFilterClass, options: classes },
              { value: filterMonth, set: setFilterMonth, options: months },
            ].map(({ value, set, options }, i) => (
              <div key={i} className="relative w-full sm:w-48">
                <select
                  value={value}
                  onChange={(e) => set(e.target.value)}
                  className="appearance-none w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl bg-white text-gray-700 shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:border-blue-500 dark:focus:ring-blue-400 transition-all cursor-pointer"
                >
                  {options.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-gray-700 dark:bg-gray-800 dark:text-white">
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-gray-400 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <Table className="w-full border-collapse">
          <TableHeader className="border-b border-gray-200 dark:border-gray-700">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 border-0">#</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 border-0">Student</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 border-0">Accuracy</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 border-0">Streak</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 border-0">Points</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400 border-0">Action</TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredStudents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6 dark:text-gray-400">No students found.</TableCell>
              </TableRow>
            ) : (
              filteredStudents.map((student) => {
                let rowClass = "";
                if (student.rank === 1) rowClass = "bg-yellow-50 dark:bg-yellow-900/20";
                else if (student.rank === 2) rowClass = "bg-gray-50 dark:bg-gray-800/20";
                else if (student.rank === 3) rowClass = "bg-orange-50 dark:bg-orange-900/20";
                else rowClass = "bg-white dark:bg-gray-900";

                return (
                  <TableRow key={student.rank} className={`${rowClass} rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300`} style={{ borderBottom: "12px solid transparent" }}>
                    <TableCell className="px-5 py-5 sm:px-6 text-start dark:text-white/90 flex items-center gap-2 border-0">
                      {student.rank}
                      {(student.rank <= 3) && (
                        <div className={`flex items-center gap-1 font-semibold text-sm ml-2 ${
                          student.rank === 1
                            ? "text-yellow-600 dark:text-yellow-400"
                            : student.rank === 2
                            ? "text-gray-600 dark:text-gray-400"
                            : "text-orange-600 dark:text-orange-400"
                        }`}>
                          {student.rank === 1 && <TrophyIcon className="w-5 h-5" />}
                          {student.rank === 1 ? "Top Scorer" : student.rank === 2 ? "2nd Place" : "3rd Place"}
                        </div>
                      )}
                    </TableCell>

                    <TableCell className="px-5 py-5 sm:px-6 text-start border-0">
                      <div className="flex items-center gap-4">
                        {student.photo ? (
                          <img src={student.photo} alt={student.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-500/30 flex items-center justify-center text-lg font-bold text-blue-700 dark:text-blue-300 shadow-sm">
                            {student.name[0]}
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white/90 tracking-tight">{student.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{student.className}</p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="px-5 py-5 sm:px-6 text-start border-0">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          student.accuracy >= 90
                            ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
                            : student.accuracy >= 80
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300"
                        }`}
                        style={{ minWidth: 54, display: "inline-block", textAlign: "center" }}
                      >
                        {student.accuracy}%
                      </span>
                    </TableCell>

                    <TableCell className="px-5 py-5 sm:px-6 text-start font-semibold text-gray-700 dark:text-gray-300 border-0">
                      🔥 {student.streak} days
                    </TableCell>

                    <TableCell className="px-5 py-5 sm:px-6 text-start font-semibold text-gray-900 dark:text-white border-0">
                      {student.points} pts
                    </TableCell>

                    <TableCell className="px-5 py-5 sm:px-6 text-center border-0">
                      <Button size="sm" variant="outline" className="transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-white/10">
                        View Profile
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
