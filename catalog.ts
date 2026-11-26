interface course {
    id: string;
    title: string;
    category: "web" | "programming" | "design"
    month: number;
}
const courses: Array<course> = [
    {
        id: "web101",
        title: "Web Development Basics",
        category: "web",
        month: 2
    },
    {
        id: "prog101",
        title: "Programming Fundamentals",
        category: "programming",
        month: 3
    },
    {
        id: "des101",
        title: "Interface Design",
        category: "design",
        month: 3
    },
    {
        id: "web201",
        title: "Accessible Web Forms",
        category: "web",
        month: 4
    },
    {
        id: "prog201",
        title: "TypeScript Basics",
        category: "web",
        month: 4
    }
]

const args = process.argv.slice (2);
const command = args[0]

if (command === "list") {
    for (let i = 0; i < courses.length; i++) {
        console.log(
            courses[i].id+ " | " +
            courses[i].title + " | " +
            courses[i].category + " | " +
            courses[i].month + " | "
        )
    }
}
else if (command === "filter") {
    const searchText = args[1].toLowerCase();

    for (let i = 0; i < courses.length; i++) {
        if (
            courses[i].title.toLowerCase().includes(searchText) ||
            courses[i].category.toLowerCase().includes(searchText)
        ) {
            console.log(
                courses[i].id + " | " +
                courses[i].title + " | " +
                courses[i].category + " | " +
                courses[i].month + " | "
            )
        }
    }
}
else if (command === "details") {
    const id = args [1];
    for (let i=0; i < courses.length; i++) {
        if (courses[i].id === id) {
            console.log(
                courses[i].id+ " | " +
                courses[i].title + " | " +
                courses[i].category + " | Month " +
                courses[i].month + " | "
            );
        }
    }
}
else if (command === "between") {
    const startMonth = Number(args[1]);
    const endMonth = Number(args[2]);

    for (let i = 0; i < courses.length; i++) {
        if (courses[i].month >= startMonth && courses[i].month <= endMonth) {
            console.log(
                courses[i].id+ " | " +
                courses[i].title + " | " +
                courses[i].category + " | Month " +
                courses[i].month + " | "
            )
        }
    }
}
