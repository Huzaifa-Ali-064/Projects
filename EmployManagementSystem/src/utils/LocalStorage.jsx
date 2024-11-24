const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Complete Onboarding",
        description:
          "Finish the onboarding process by reading all required documents and watching introductory videos.",
        date: "2024-10-31",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Weekly Report",
        description:
          "Submit the weekly progress report by the end of the week.",
        date: "2024-11-04",
        category: "Reports",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "System Upgrade",
        description: "Assist IT in upgrading to the latest system software.",
        date: "2024-11-07",
        category: "Technical",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer Feedback Analysis",
        description: "Analyze feedback from recent customer surveys.",
        date: "2024-10-31",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare Presentation",
        description: "Prepare a presentation for next week's team meeting.",
        date: "2024-11-01",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Client Database",
        description: "Ensure all client details are up-to-date.",
        date: "2024-11-01",
        category: "Data Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team Training",
        description: "Attend the upcoming training session on product updates.",
        date: "2024-11-02",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Audit Review",
        description: "Conduct a preliminary review before the upcoming audit.",
        date: "2024-11-04",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Social Media Planning",
        description: "Develop a content calendar for the next month.",
        date: "2024-11-01",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Market Research",
        description: "Research trends in the industry and report findings.",
        date: "2024-11-03",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Quarterly Budget Review",
        description: "Review the quarterly budget and propose adjustments.",
        date: "2024-10-31",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Project A Documentation",
        description: "Finalize and submit documentation for Project A.",
        date: "2024-11-05",
        category: "Projects",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  try {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const admin = JSON.parse(localStorage.getItem("admin")) || [];
    return { employees, admin };
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return { employees: [], admin: [] };
  }
};
