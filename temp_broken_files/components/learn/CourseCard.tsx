import Link from 'next/link',
export type Course = {
  id: string,
  title: string,
  durationMinutes: number,
  level: string,
  isFree: boolean,
  category: string,
  certificationBadge: string,
  description?: string
},

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className=&quot;border rounded-lg p-4 hover:shadow-md transition&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h3 className=&quot;font-semibold text-lg&quot;>{course.title}</h3>
        <span className=&quot;text-xs border px-2 py-0.5 rounded bg-green-50 text-green-700&quot;>
          {course.isFree ? 'Free' : 'Paid'}
        </span>
      </div>
      <div className=&quot;text-xs text-gray-500 mt-1&quot;>{course.category} • {course.level} • {Math.round(course.durationMinutes / 60)}h</div>
      <div className=&quot;text-sm mt-2 line-clamp-2&quot;>{course.description}</div>
      <div className=&quot;mt-3 flex items-center justify-between&quot;>
        <span className=&quot;text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded&quot;>Badge: {course.certificationBadge}</span>
        <Link href={`/learn/${course.id}`}>
          <a className="text-blue-600 hover: underline text-sm">View course</a>        </Link>
          <a className=&quot;text-blue-600 hover:underline text-sm&quot;>View course</a>
        </a>
      </div>
    </div>
  )}