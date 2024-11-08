package com.yousefalfoqaha.flowsheet.dtomapper;

import com.yousefalfoqaha.flowsheet.dto.CourseDTO;
import com.yousefalfoqaha.flowsheet.model.Course;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class CourseDTOMapper implements Function<Course, CourseDTO> {
    @Override
    public CourseDTO apply(Course c) {
        return new CourseDTO(
                c.getId(),
                c.getCode(),
                c.getName(),
                c.getCreditHours(),
                c.getPrerequisites()
                        .stream()
                        .map(Course::getId)
                        .toList(),
                c.getCorequisites()
                        .stream()
                        .map(Course::getId)
                        .toList()
        );
    }
}