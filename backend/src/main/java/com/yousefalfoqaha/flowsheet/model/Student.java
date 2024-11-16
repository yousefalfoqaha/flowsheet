package com.yousefalfoqaha.flowsheet.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table("flowsheet")
public class Student {
        @Id
        long id;
        String name;
        String email;
        String password;
        AggregateReference<StudyPlan, Long> studyPlan;
        @MappedCollection(idColumn = "student_id", keyColumn = "course_id")
        Map<Long, StudentMapping> studentMappings;
}
