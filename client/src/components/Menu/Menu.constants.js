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
      action: (e) => {
        e.preventDefault();
      },
    },
    {
      id: "worksmenulink",
      title: "works",
      action: (e) => {
        e.preventDefault();
      },
    },
    {
      id: "peoplemenulink",
      title: "people say",
      action: (e) => {
        e.preventDefault();
      },
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
