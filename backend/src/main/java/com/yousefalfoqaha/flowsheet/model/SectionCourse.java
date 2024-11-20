package com.yousefalfoqaha.flowsheet.model;

import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("section_course")
public record SectionCourse (
        @Column("course")
        AggregateReference<Course, Long> course
) {
}
