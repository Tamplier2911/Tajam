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
      action: jumper("#team"),
    },
    {
      id: "workslink",
      title: "works",
      action: jumper("#works"),
    },
    {
      id: "peoplelink",
      title: "people say",
      action: jumper("#testimonials"),
    },
    {
      id: "contactslink",
      title: "contacts",
      action: jumper("#contacts"),
    },
  ],
};
