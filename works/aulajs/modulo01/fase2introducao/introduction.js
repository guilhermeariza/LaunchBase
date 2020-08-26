const classA = [
    {
        name: "Mayk",
        grade: 2,
    },
    {
        name: "Diego",
        grade: 7
    },
    {
        name: "Fulano",
        grade: 2
    },
    {
        name: "Mais um student",
        grade: 10
    }
]

const classB = [
    {
        name: "Cleiton",
        grade: 10
    },
    {
        name: "Robson",
        grade: 10
    },
    {
        name: "Siclano",
        grade: 2
    },
    {
        name: 'Novo student',
        grade: 3
    }
]

function calculateAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average

}

function sendMessage(average, turma) {

    if (average > 5) {
        console.log(`${turma} average: ${average}. Congratulations`)
    } else {
        console.log(`${turma} average: ${average}. Is not good`)
    }


}

function markAsFlunked(student) {
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;
    }
}
function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`o Aluno ${student.name} está flunked!`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendFlunkedMessage(student);
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsReprovados(classA)
studentsReprovados(classB)