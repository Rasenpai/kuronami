import { cn } from "@/lib/cn";
import { courses } from "@/lib/menu";

export default function OmakasePane() {
  return (
    <ul className="relative flex flex-col gap-6">
      {courses.map((course) => (
        <li
          key={course.number}
          className={cn(
            "flex flex-col gap-1 lg:flex-row lg:items-baseline lg:justify-between lg:gap-4",
            course.highlighted && "lg:-mx-2 lg:bg-surface-container/60 lg:p-2",
          )}
        >
          <div className="flex items-baseline gap-2 lg:flex-1">
            <span className="hidden text-label-md font-bold text-primary lg:inline">
              {course.number}.
            </span>
            <h3 className="whitespace-nowrap font-serif text-headline-sm text-on-surface">
              <span className="lg:hidden">{course.number}. </span>
              {course.title}
            </h3>
            <span
              className={cn(
                "mx-1 h-0 min-w-4 flex-1 border-b border-dotted",
                course.highlighted
                  ? "border-primary/40"
                  : "border-outline-variant",
              )}
            />
            <span className="text-label-sm text-secondary lg:hidden">
              {course.kanji}
            </span>
          </div>

          <div className="flex items-baseline gap-3 lg:max-w-md lg:text-right">
            <p
              className={cn(
                "text-body-sm text-on-surface-variant lg:text-body-md",
                course.highlighted
                  ? "lg:font-medium lg:text-on-surface"
                  : "lg:text-secondary",
              )}
            >
              {course.description}
            </p>
            <span
              className={cn(
                "hidden shrink-0 text-label-md lg:inline",
                course.highlighted ? "text-primary" : "text-outline",
              )}
            >
              ({course.kanji})
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
