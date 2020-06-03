import { jumper } from "../../utils/jumper";

export const headerConstants = {
  links: [
    {
      id: "homelink",
      title: "home",
      action: jumper("#hero"),
    },
    {
      id: "aboutlink",
      title: "about",
      action: jumper("#about"),
    },
    {
      id: "expilink",
      title: "experience",
      action: jumper("#experience", 40),
    },
    {
      id: "teamslink",
      title: "teams",
      action: (e) => {
        e.preventDefault();
      },
    },
    {
      id: "workslink",
      title: "works",
      action: (e) => {
        e.preventDefault();
      },
    },
    {
      id: "peoplelink",
      title: "people say",
      action: (e) => {
        e.preventDefault();
      },
    },
    {
      id: "contactslink",
      title: "contacts",
      action: (e) => {
        e.preventDefault();
      },
    },
  ],
};
