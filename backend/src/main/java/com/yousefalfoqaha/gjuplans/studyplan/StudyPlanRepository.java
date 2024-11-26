package com.yousefalfoqaha.gjuplans.studyplan;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudyPlanRepository extends ListCrudRepository<StudyPlan, Long> {

    @Query(
            "SELECT id, start_academic_year, track " +
            "FROM study_plan " +
            "WHERE program = :programId"
    )
    public List<StudyPlanSummaryResponse> findAllStudyPlansByProgram(long programId);
}
