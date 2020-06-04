import { jumper } from "../../utils/jumper";

export const menuConstants = {
  menulinks: [
    {
      id: "homemenulink",
      title: "home",
      action: jumper("#hero"),
    },
    {
      id: "aboutmenulink",
      title: "about",
      action: jumper("#about"),
    },
    {
      id: "expimenulink",
      title: "experience",
      action: jumper("#experience", 40),
    },
    {
      id: "teamsmenulink",
      title: "teams",
      action: jumper("#team"),
    },
    {
      id: "worksmenulink",
      title: "works",
      action: jumper("#works"),
    },
    {
      id: "peoplemenulink",
      title: "people say",
      action: jumper("#testimonials"),
    },
    {
      id: "contactsmenulink",
      title: "contacts",
      action: (e) => {
        e.preventDefault();
      },
    },
  ],
};
