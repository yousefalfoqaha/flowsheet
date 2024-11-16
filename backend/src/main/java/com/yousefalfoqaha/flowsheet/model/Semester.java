package com.yousefalfoqaha.flowsheet.model;

import com.yousefalfoqaha.flowsheet.enums.SemesterOrder;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import java.util.Map;

@Table("semester")
public record Semester(
        @Id
        long id,
        @Transient
        SemesterOrder name,
        int columnIndex,
        int creditHourLimit,
        @MappedCollection(idColumn = "semester_id", keyColumn = "course_id")
        Map<Long, SemesterWhitelist> whitelist
) {
}
