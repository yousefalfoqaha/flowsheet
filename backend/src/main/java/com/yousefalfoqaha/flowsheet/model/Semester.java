package com.yousefalfoqaha.flowsheet.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "semester")
public class Semester {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private int order; // This represents the order of the semester

    @ManyToOne
    @JoinColumn(name = "flowsheet_id", nullable = false)
    private Flowsheet flowsheet; // Each semester belongs to one flowsheet

    @ManyToMany
    @JoinTable(
            name = "semester_course_whitelist",
            joinColumns = @JoinColumn(name = "semester_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courseWhitelist; // List of allowed courses for this semester
}
