const students = [
    {
        id: 1,
        name: "Reniel Demafelis",
        year: 1,
        course: "BSIT",
        grades: [85, 90, 88],
        enrolled: true
    },
    {
        id: 2,
        name: "Khyla Albaracin",
        year: 2,
        course: "BEED",
        grades: [92, 89, 95],
        enrolled: true
    },
    {
        id: 3,
        name: "Jeffrey Coriento",
        year: 3,
        course: "BSIT",
        grades: [91, 94, 90],
        enrolled: true
    },
    {
        id: 4,
        name: "Jaazeniah Mirano",
        year: 1,
        course: "BSAB",
        grades: [78, 82, 80],
        enrolled: true
    },
    {
        id: 5,
        name: "Christine Cordova",
        year: 4,
        course: "BEED",
        grades: [95, 97, 96],
        enrolled: true
    },
    {
        id: 6,
        name: "Mario Nebres",
        year: 2,
        course: "BSIT",
        grades: [84, 86, 89],
        enrolled: true
    },
    {
        id: 7,
        name: "Betty Bargaso",
        year: 3,
        course: "BSAB",
        grades: [88, 85, 90],
        enrolled: false
    },
    {
        id: 8,
        name: "Joannah Marie Elgario",
        year: 1,
        course: "BEED",
        grades: [81, 79, 85],
        enrolled: true
    },
    {
        id: 9,
        name: "Johnjay Arroyo",
        year: 4,
        course: "BSIT",
        grades: [93, 91, 95],
        enrolled: true
    },
    {
        id: 10,
        name: "Jisa Erosido",
        year: 2,
        course: "BSAB",
        grades: [76, 80, 78],
        enrolled: false
    },
    {
        id: 11,
        name: "Kristine Basa",
        year: 3,
        course: "BEED",
        grades: [90, 92, 94],
        enrolled: true
    },
    {
        id: 12,
        name: "Dave Rezaba",
        year: 1,
        course: "BSIT",
        grades: [79, 83, 81],
        enrolled: true
    },
    {
        id: 13,
        name: "Dave Rivera",
        year: 4,
        course: "BSAB",
        grades: [89, 91, 87],
        enrolled: true
    },
    {
        id: 14,
        name: "Lena Bahian",
        year: 2,
        course: "BEED",
        grades: [86, 88, 90],
        enrolled: true
    },
    {
        id: 15,
        name: "Jessa Hilardino",
        year: 3,
        course: "BSIT",
        grades: [94, 96, 92],
        enrolled: true
    },
    {
        id: 16,
        name: "Rechelle Ann Casilangan",
        year: 1,
        course: "BSAB",
        grades: [75, 78, 80],
        enrolled: false
    },
    {
        id: 17,
        name: "Sheilla Marie Lañojan",
        year: 4,
        course: "BEED",
        grades: [93, 95, 91],
        enrolled: true
    },
    {
        id: 18,
        name: "Jocelyn Semillano",
        year: 2,
        course: "BSIT",
        grades: [87, 85, 89],
        enrolled: true
    },
    {
        id: 19,
        name: "Inri Daclan",
        year: 3,
        course: "BSAB",
        grades: [82, 84, 86],
        enrolled: true
    },
    {
        id: 20,
        name: "Kate Fernandez",
        year: 1,
        course: "BEED",
        grades: [80, 83, 85],
        enrolled: true
    },
    {
        id: 21,
        name: "Cris John Gatilla",
        year: 4,
        course: "BSIT",
        grades: [96, 94, 98],
        enrolled: true
    },
    {
        id: 22,
        name: "Jeca Dagumboy",
        year: 2,
        course: "BSAB",
        grades: [79, 81, 83],
        enrolled: false
    },
    {
        id: 23,
        name: "Krishamin Lagahit",
        year: 3,
        course: "BEED",
        grades: [91, 89, 93],
        enrolled: true
    },
    {
        id: 24,
        name: "Remark Allon",
        year: 1,
        course: "BSIT",
        grades: [83, 87, 85],
        enrolled: true
    },
    {
        id: 25,
        name: "Roman Maque",
        year: 4,
        course: "BEED",
        grades: [92, 90, 94],
        enrolled: true
    },
    {
        id: 26,
        name: "Romel Maque",
        year: 2,
        course: "BEED",
        grades: [88, 86, 91],
        enrolled: true
    },
    {
        id: 27,
        name: "Ronamie Alegria",
        year: 3,
        course: "BSIT",
        grades: [90, 93, 89],
        enrolled: true
    },
    {
        id: 28,
        name: "Jamilla Siason",
        year: 1,
        course: "BSAB",
        grades: [77, 82, 79],
        enrolled: false
    },
    {
        id: 29,
        name: "Shannon Gale Dela Cruz",
        year: 4,
        course: "BEED",
        grades: [94, 92, 96],
        enrolled: true
    },
    {
        id: 30,
        name: "Denmark Sillador",
        year: 2,
        course: "BSIT",
        grades: [85, 88, 87],
        enrolled: true
    }
];

function getAverageGrade(student) {

    if (
        !student ||
        !Array.isArray(student.grades) ||
        student.grades.length === 0
    ) {
        return 0;
    }

    return student.grades.reduce(
        (sum, grade) => sum + grade,
        0
    ) / student.grades.length;
}

function getTopStudents(students, n) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    if (!Number.isInteger(n) || n < 0) {
        throw new Error(
            "Number of students must be a non-negative integer."
        );
    }

    return students
        .map(student => ({
            ...student,
            grades: Array.isArray(student.grades)
                ? [...student.grades]
                : [],
            average: getAverageGrade(student)
        }))
        .sort((a, b) => b.average - a.average)
        .slice(0, n);
}

function groupByCourse(students) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    return students.reduce(
        (groups, student) => {

            if (!groups[student.course]) {
                groups[student.course] = [];
            }

            groups[student.course].push({
                ...student,
                grades: Array.isArray(student.grades)
                    ? [...student.grades]
                    : []
            });

            return groups;
        },
        {}
    );
}

function getEnrolledCount(students) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    const enrolled = students.filter(
        student => student.enrolled === true
    ).length;

    const notEnrolled = students.filter(
        student => student.enrolled === false
    ).length;

    return {
        enrolled,
        notEnrolled
    };
}

function findStudent(students, name) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    if (
        typeof name !== "string" ||
        name.trim() === ""
    ) {
        return null;
    }

    const searchName =
        name.trim().toLowerCase();

    const student = students.find(
        student =>
            typeof student.name === "string" &&
            student.name.toLowerCase() === searchName
    );

    if (!student) {
        return null;
    }

    return {
        ...student,
        grades: Array.isArray(student.grades)
            ? [...student.grades]
            : []
    };
}

function getCourseAverages(students) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    const grouped =
        groupByCourse(students);

    return Object.keys(grouped)
        .map(course => {

            const courseStudents =
                grouped[course];

            const studentsWithGrades =
                courseStudents.filter(
                    student =>
                        Array.isArray(student.grades) &&
                        student.grades.length > 0
                );

            const total =
                studentsWithGrades.reduce(
                    (sum, student) =>
                        sum + getAverageGrade(student),
                    0
                );

            const average =
                studentsWithGrades.length > 0
                    ? total / studentsWithGrades.length
                    : 0;

            return {
                course,
                average: Number(
                    average.toFixed(2)
                )
            };
        })
        .sort(
            (a, b) => b.average - a.average
        );
}

function exportSummary(students) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    if (students.length === 0) {

        return {
            totalStudents: 0,
            overallAverage: 0,
            topPerformingStudent: null,
            breakdownByCourse: []
        };
    }

    const allGrades = students.flatMap(
        student =>
            Array.isArray(student.grades)
                ? student.grades
                : []
    );

    const overallAverage =
        allGrades.length > 0
            ? allGrades.reduce(
                (sum, grade) => sum + grade,
                0
            ) / allGrades.length
            : 0;

    const topStudent =
        getTopStudents(students, 1)[0];

    return {
        totalStudents: students.length,

        overallAverage: Number(
            overallAverage.toFixed(2)
        ),

        topPerformingStudent:
            topStudent
                ? {
                    name: topStudent.name,
                    course: topStudent.course,
                    average: Number(
                        topStudent.average.toFixed(2)
                    )
                }
                : null,

        breakdownByCourse:
            getCourseAverages(students)
    };
}

function filterByYear(students, year) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    return students
        .filter(student => student.year === year)
        .map(student => ({
            ...student,
            grades: Array.isArray(student.grades)
                ? [...student.grades]
                : []
        }));
}

function sortByName(students) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    return students
        .map(student => ({
            ...student,
            grades: Array.isArray(student.grades)
                ? [...student.grades]
                : []
        }))
        .sort(
            (a, b) => a.name.localeCompare(b.name)
        );
}

function main() {

    console.log(
        "=============================================="
    );

    console.log(
        "       STUDENT RECORDS DATA REPORT"
    );

    console.log(
        "=============================================="
    );


    console.log("\n TOTAL STUDENTS");
    console.log("------------------");

    console.log(
        "Total:",
        students.length
    );

//  OVERALL AVERAGE GRADE//
    
    console.log(
        "\n OVERALL AVERAGE GRADE"
    );

    console.log(
        "------------------------"
    );

    const summary =
        exportSummary(students);

    console.log(
        summary.overallAverage.toFixed(2)
    );

    console.log("\n TOP STUDENTS");
    console.log("----------------");

    const topStudents =
        getTopStudents(students, 3);

    topStudents.forEach(
        (student, index) => {

            console.log(
                `${index + 1}. ${student.name} - ${student.course} - Average: ${student.average.toFixed(2)}`
            );
        }
    );

    console.log(
        "\n AVERAGE GRADE BY COURSE"
    );

    console.log(
        "--------------------------"
    );

    const courseAverages =
        getCourseAverages(students);

    courseAverages.forEach(item => {

        console.log(
            `${item.course}: ${item.average.toFixed(2)}`
        );
    });

    console.log(
        "\n STUDENTS GROUPED BY COURSE"
    );

    console.log(
        "-----------------------------"
    );

    const groupedStudents =
        groupByCourse(students);

    Object.keys(groupedStudents).forEach(
        course => {

            console.log(`\n${course}:`);

            groupedStudents[course].forEach(
                student => {

                    console.log(
                        `- ${student.name}`
                    );
                }
            );
        }
    );

    console.log(
        "\n ENROLLMENT COUNT"
    );

    console.log(
        "-------------------"
    );

    const enrollment =
        getEnrolledCount(students);

    console.log(
        "Enrolled:",
        enrollment.enrolled
    );

    console.log(
        "Not Enrolled:",
        enrollment.notEnrolled
    );

    console.log(
        "\n STUDENT SEARCH"
    );

    console.log(
        "-----------------"
    );

    const foundStudent =
        findStudent(
            students,
            "Reniel Demafelis"
        );

    if (foundStudent) {

        console.log(
            "Found:",
            foundStudent.name
        );

        console.log(
            "Course:",
            foundStudent.course
        );

        console.log(
            "Average:",
            getAverageGrade(
                foundStudent
            ).toFixed(2)
        );

    } else {

        console.log(
            "Student not found."
        );
    }
    
    console.log(
        "\n COMPLETE SUMMARY"
    );

    console.log(
        "--------------------"
    );

    console.log(
        "Total Students:",
        summary.totalStudents
    );

    console.log(
        "Overall Average:",
        summary.overallAverage.toFixed(2)
    );

    if (summary.topPerformingStudent) {

        console.log(
            "Top Student:",
            summary.topPerformingStudent.name
        );

        console.log(
            "Course:",
            summary.topPerformingStudent.course
        );

        console.log(
            "Average:",
            summary.topPerformingStudent.average.toFixed(2)
        );
    }

    console.log(
        "\nCourse Breakdown:"
    );

    summary.breakdownByCourse.forEach(
        item => {

            console.log(
                `- ${item.course}: ${item.average.toFixed(2)}`
            );
        }
    );

  

    console.log(
        "-------------------------"
    );

    const year2Students =
        filterByYear(students, 2);

    console.log(
        "Year 2 Students:",
        year2Students.length
    );

    const alphabeticalStudents =
        sortByName(students);

    console.log(
        "First Student Alphabetically:",
        alphabeticalStudents[0].name
    );
    
    console.log(
        "\nAverage Grade of First Student:",
        getAverageGrade(students[0]).toFixed(2)
    );


    console.log(
        "\n=============================================="
    );

    console.log(
        "              REPORT COMPLETE"
    );

    console.log(
        "=============================================="
    );
}


main();
