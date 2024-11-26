import * as React from "react";
import {StudyPlanDropdown} from "@/components/main/StudyPlanDropdown.tsx";
import {ProgramDropdown} from "@/components/main/ProgramDropdown.tsx";
import {Program} from "@/state/programList.ts";
import {StudyPlanListItem} from "@/state/studyPlanList.ts";
import {Button} from "@/components/ui/button.tsx";
import {StudyPlan} from "@/components/main/StudyPlan.tsx";

export function Main() {
    const [selectedProgram, setSelectedProgram] = React.useState<Program | null>(null);
    const [selectedStudyPlanListItem, setSelectedStudyPlanListItem] = React.useState<StudyPlanListItem | null>(null);
    const [selectedStudyPlanId, setSelectedStudyPlanId] = React.useState<number | undefined>(undefined);

    return (
        <div className="mx-auto flex flex-col gap-2 items-center">
            <h1 className="text-4xl p-y-2 font-bold">GJU Plans</h1>
            <div className="flex flex-wrap gap-1">
                <ProgramDropdown
                    selectedProgram={selectedProgram}
                    setSelectedProgram={setSelectedProgram}
                    resetSelectedStudyPlanItem={() => setSelectedStudyPlanListItem(null)}
                />
                <StudyPlanDropdown
                    selectedProgram={selectedProgram}
                    selectedStudyPlanListItem={selectedStudyPlanListItem}
                    setSelectedStudyPlanListItem={setSelectedStudyPlanListItem}
                />
                <Button
                    disabled={!selectedStudyPlanListItem}
                    onClick={() => setSelectedStudyPlanId(selectedStudyPlanListItem?.id)}
                >
                    View Study Plan
                </Button>
            </div>
            <StudyPlan selectedStudyPlanId={selectedStudyPlanId} />
        </div>
    );
}