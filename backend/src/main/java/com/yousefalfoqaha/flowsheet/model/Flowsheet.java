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
@Table(name = "flowsheet")
public class Flowsheet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private boolean isSuggested;

    @ManyToOne
    @JoinColumn(name = "study_plan_id")
    private StudyPlan studyPlan;

    @OneToMany(mappedBy = "flowsheet", cascade = CascadeType.ALL)
    private List<Semester> semesters; // Represents the semesters in the flowsheet
}
