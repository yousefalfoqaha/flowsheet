package com.yousefalfoqaha.flowsheet.model;

import com.yousefalfoqaha.flowsheet.enums.Relation;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("course_prerequisite")
public record CoursePrerequisite(
        @Column("prerequisite")
        AggregateReference<Course, Long> prerequisite,
        @Column("relation")
        Relation relation
) {
}
