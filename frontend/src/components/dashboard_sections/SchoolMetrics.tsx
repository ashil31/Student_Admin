import {
  ArrowUpIcon,
  GroupIcon,     // same here
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function SchoolMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
      {/* Total Students */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl dark:bg-blue-900/30">
          <GroupIcon className="text-blue-600 size-6" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Students
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              245
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            12%
          </Badge>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">from last month</p>
      </div>

      {/* Total Classes */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl dark:bg-green-900/30">
          {/* <GraduationCapIcon className="text-green-600 size-6" /> */}
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total Classes
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              8
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            8%
          </Badge>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">from last month</p>
      </div>

      {/* Avg. Performance */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl dark:bg-purple-900/30">
          {/* <ChartBarIcon className="text-purple-600 size-6" /> */}
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Avg. Performance
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              86.2%
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            5%
          </Badge>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">from last month</p>
      </div>

      {/* Top Performer */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl dark:bg-orange-900/30">
          {/* <HourglassIcon className="text-orange-600 size-6" /> */}
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Top Performer
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              830 pts
            </h4>
          </div>
        </div>
        <p className="text-xs text-green-600 font-medium mt-1">Student 1, Class 8</p>
      </div>
    </div>
  );
}
