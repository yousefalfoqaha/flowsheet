import { Course } from '@/data/courses'
import { Semester } from '@/data/semesters'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function courseInSemester(
  courseId: number,
  semesters: { [key: number]: Semester }
): { inSemester: boolean; semester: Semester | undefined } {
  const semester = Object.values(semesters).find((semester) =>
    semester.courseIds.includes(courseId)
  )

  return {
    inSemester: !!semester,
    semester,
  }
}

export function getCourseStatus(
  course: Course,
  selectedCourses: Course[],
  semesters: { [key: number]: Semester },
  selectedSemesterId: number
) {
  if (selectedCourses.includes(course)) return 'SELECTED'

  const { inSemester } = courseInSemester(course.id, semesters)
  if (inSemester) return 'ADDED'

  for (const prerequisiteId of course.prerequisiteIds) {
    const { inSemester, semester } = courseInSemester(prerequisiteId, semesters)
    if (
      !inSemester ||
      !semester ||
      semester.order >= semesters[selectedSemesterId].order
    ) {
      return 'DISABLED'
    }
  }

  return 'AVAILABLE'
}
