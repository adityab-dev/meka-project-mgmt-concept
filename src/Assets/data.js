const init_data = {
  cards: {
    1: {
      id: 1,
      dot_color: "green",
      header_text: "design systems",
      heading: "Hero Section",
      main_text:
        "Create a design system for a hero section in 2 different variants. Create a simple presentation with these components.",
      circle_colors: ["green"],
      circle_names: ["AK"],
    },
    2: {
      id: 2,
      dot_color: "blue",
      header_text: "typograpgy",
      heading: "Typography Change",
      main_text:
        "Modify typography and styling of text placed on 6 screens of the website design. Prepare a documentation.",
      circle_names: ["ML"],
      circle_colors: ["pink"],
    },
    3: {
      id: 3,
      dot_color: "red",
      header_text: "development",
      heading: "Implement design screens",
      main_text:
        "Our designers created 6 screens for a website that needs to be implemented by our dev team.",
      circle_names: ["VH", "LK"],
      circle_colors: ["darkblue", "green"],
    },
    4: {
      id: 4,
      dot_color: "red",
      header_text: "development",
      heading: "Fix bugs in the CSS code",
      main_text:
        "Fix small bugs that are essential to prepare for the next release that will happen this quarter.",
      circle_names: ["HU", "NL"],
      circle_colors: ["pink", "orange"],
    },
    5: {
      id: 5,
      dot_color: "blue",
      header_text: "typography",
      heading: "Proofread final text",
      main_text:
        "The text provided by marketing department needs to be proofread so that we make sure that it fits into our design.",
      circle_names: ["AG"],
      circle_colors: ["orange"],
    },
    6: {
      id: 6,
      dot_color: "green",
      header_text: "design systems",
      heading: "Responsive Design",
      main_text:
        "All designs need to be responsive. The requirement is that it fits all web and mobile screens.",
      circle_names: ["VH", "AG"],
      circle_colors: ["darkblue", "orange"],
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      card_ids: [1, 2],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      card_ids: [3],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      card_ids: [4, 5, 6],
    },
    // "column-4": {
    //   id: "column-4",
    //   title: "New Column",
    //   card_ids: [1, 3, 4],
    // },
  },
  columns_order: ["column-1", "column-2", "column-3"],
};

export default init_data;
