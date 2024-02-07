interface TServices {
  id: number,
  title: string,
  cssClasses: string
}

interface ExLogotypeType {
  id: number,
  img: string,
  services: Array<TServices>
}

export const experienceGroup: Array<ExLogotypeType> =
  [
    {
      id: 1,
      img: "inter-rao",
      services: [
        {id: 1, title: "Оценка бизнеса", cssClasses: "bg-red-700"},
        {id: 2, title: "Оценка имущественных активов", cssClasses: "bg-cyan-700"}
      ]
    },
    {
      id: 2,
      img: "rosatom",
      services: [
        {id: 1, title: "Оценка бизнеса", cssClasses: "bg-red-700"},
        {id: 2, title: "Оценка имущественных активов", cssClasses: "bg-cyan-700"}
      ]
    },
    {
      id: 3,
      img: "moskowkiy-bank",
      services: [
        {id: 1, title: "Оценка", cssClasses: "bg-blue-700"},
      ]
    },
    {
      id: 4,
      img: "rosekim-bank",
      services: [
        {id: 1, title: "Оценка", cssClasses: "bg-blue-700"},
      ]
    },
    {
      id: 5,
      img: "rosselhoz-bank",
      services: [
        {id: 1, title: "Оценка", cssClasses: "bg-blue-700"},
      ]
    },
    {
      id: 6,
      img: "afk-systema",
      services: [
        {id: 1, title: "Оценка", cssClasses: "bg-blue-700"},
      ]
    },
    {
      id: 7,
      img: "web-rf",
      services: [
        {id: 1, title: "Оценка", cssClasses: "bg-blue-700"},
      ]
    },
    {
      id: 8,
      img: "sber",
      services: [
        {id: 1, title: "Оценка", cssClasses: "bg-blue-700"},
      ]
    },
    {
      id: 9,
      img: "mkb",
      services: [
        {id: 1, title: "Оценка", cssClasses: "bg-blue-700"},
      ]
    },
    {
      id: 10,
      img: "novikom-bank",
      services: [
        {id: 1, title: "Оценка", cssClasses: "bg-blue-700"},
      ]
    },
    {
      id: 11,
      img: "pcb",
      services: [
        {id: 1, title: "Строительный аудит", cssClasses: "bg-violet-700"},
        {id: 2, title: "Финансово-технический надзор", cssClasses: "bg-fuchsia-700"},
      ]
    },
    {
      id: 12,
      img: "otkritie-bank",
      services: [
        {id: 1, title: "Строительный аудит", cssClasses: "bg-violet-700"},
        {id: 2, title: "Строительная экспертиза", cssClasses: "bg-emerald-700"},
        {id: 3, title: "Технологическая экспертиза", cssClasses: "bg-gray-700"},
      ]
    },
    {
      id: 13,
      img: "cb-rf",
      services: [
        {id: 1, title: "Строительный аудит", cssClasses: "bg-violet-700"},
        {id: 2, title: "Строительная экспертиза", cssClasses: "bg-emerald-700"},
        {id: 3, title: "Технологическая экспертиза", cssClasses: "bg-gray-700"},
      ]
    },
    {
      id: 14,
      img: "almaz-antay",
      services: [
        {id: 1, title: "Строительный аудит", cssClasses: "bg-violet-700"},
        {id: 2, title: "Строительная экспертиза", cssClasses: "bg-emerald-700"},
        {id: 3, title: "Технологическая экспертиза", cssClasses: "bg-gray-700"},
      ]
    },
    {
      id: 15,
      img: "turizm-rf",
      services: [
        {id: 1, title: "Строительный аудит", cssClasses: "bg-violet-700"},
        {id: 2, title: "Строительная экспертиза", cssClasses: "bg-emerald-700"},
        {id: 3, title: "Технологическая экспертиза", cssClasses: "bg-gray-700"},
      ]
    },
    {
      id: 16,
      img: "frp",
      services: [
        {id: 1, title: "Строительный аудит", cssClasses: "bg-violet-700"},
        {id: 2, title: "Строительная экспертиза", cssClasses: "bg-emerald-700"},
        {id: 3, title: "Технологическая экспертиза", cssClasses: "bg-gray-700"},
      ]
    },
    {
      id: 17,
      img: "rosteh",
      services: [
        {id: 1, title: "Строительный аудит", cssClasses: "bg-violet-700"},
        {id: 2, title: "Строительная экспертиза", cssClasses: "bg-emerald-700"},
        {id: 3, title: "Технологическая экспертиза", cssClasses: "bg-gray-700"},
      ]
    },
  ];
