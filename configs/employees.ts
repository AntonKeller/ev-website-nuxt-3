interface TEmployee {
  id: number,
  img: string,
  fullName: string,
  post: string,
  area: string,
}

export const employees: Array<TEmployee> = [
  {
    id: 1,
    img: "avatar-1",
    fullName: "Иванов Генадий Викторович",
    post: "Исполнительный директор",
    area: "Moskow",
  },
  {
    id: 2,
    img: "avatar-2",
    fullName: "Иванов Генадий Викторович",
    post: "Генеральный директор",
    area: "Moskow",
  },
  {
    id: 3,
    img: "avatar-3",
    fullName: "Иванов Генадий Викторович",
    post: "Директор по развитию",
    area: "Moskow",
  },
  // {
  //   id: 4,
  //   img: "avatar-1",
  //   fullName: "Иванов Генадий Викторович",
  //   post: "Финансовый директор",
  //   area: "Moskow",
  // },
  // {
  //   id: 5,
  //   img: "avatar-3",
  //   fullName: "Иванов Генадий Викторович",
  //   post: "Финансовый директор",
  //   area: "Moskow",
  // },
]
