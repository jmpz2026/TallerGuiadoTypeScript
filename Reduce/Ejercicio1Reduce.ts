interface student {
    name: string;
    notes: number[];
}

const students: student[] = [
    {
        name: "Junior",
        notes: [5,10,20,1,5,2]
    },
    {
        name: "Juan",
        notes: [2,10,12,11,22,2]
    }
]

let finalNote = students.reduce(
    (acc, student) => {
        const notes = student.notes.reduce(
            (sum, note) => {
                return sum + note;
            }, 0
        )
    return acc + notes;
    }, 0
)

finalNote = finalNote / students.length;

console.log(`El promedio de los ${students.length} estudiantes es de: ${finalNote.toFixed(2)}`);