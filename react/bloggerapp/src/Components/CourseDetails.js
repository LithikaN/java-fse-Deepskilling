function CourseDetails() {

    const courses = [
        { id: 1, course: "ReactJS" },
        { id: 2, course: "Angular" },
        { id: 3, course: "NodeJS" }
    ];

    return (
        <div>
            <h2>Course Details</h2>

            <ul>
                {
                    courses.map(course => (
                        <li key={course.id}>
                            {course.course}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CourseDetails;