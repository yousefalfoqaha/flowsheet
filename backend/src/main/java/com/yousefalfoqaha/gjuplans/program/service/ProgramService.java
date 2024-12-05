package com.yousefalfoqaha.gjuplans.program.service;

import com.yousefalfoqaha.gjuplans.program.ProgramRepository;
import com.yousefalfoqaha.gjuplans.program.dto.request.CreateProgramRequest;
import com.yousefalfoqaha.gjuplans.program.dto.response.CreateProgramResponse;
import com.yousefalfoqaha.gjuplans.program.dto.response.ProgramOptionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ProgramService {
    private final ProgramRepository programRepository;
    private final ProgramManagementService programManagementService;

    public List<ProgramOptionResponse> getAllPrograms() {
        return programRepository.findAllPrograms    ();
    }

    public CreateProgramResponse createProgram(CreateProgramRequest request) {
        var newProgram = programManagementService.createProgram(request);
        return new CreateProgramResponse(newProgram.getId());
    }
}
