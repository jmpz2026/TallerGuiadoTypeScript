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

students.forEach(student => {
    let finalNote: number = 0;
    let count: number = 0;
    student.notes.forEach(notes => {
        finalNote += notes;
        count += 1;
    })
    console.log(`El estudiante: ${student.name} tuvo como promedio: ${(finalNote/count).toFixed(2)}`);
})