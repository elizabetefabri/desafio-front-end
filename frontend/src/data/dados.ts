import { faker } from "@faker-js/faker";

export const data = {
  performance: [
    { day: "Segunda", Aguardando: 14500, Implantadas: 13400 },
    { day: "Terça", Aguardando: 16500, Implantadas: 12000 },
    { day: "Quarta", Aguardando: 5500, Implantadas: 23500 },
    { day: "Quinta", Aguardando: 15500, Implantadas: 6000 },
    { day: "Sexta", Aguardando: 13000, Implantadas: 12000 },
    { day: "Sábado", Aguardando: 15500, Implantadas: 13500 },
    { day: "Domingo", Aguardando: 20500, Implantadas: 11500 },
  ],
  dados: [
    {
      month: "Jan",
      "TD Consultoria": 311,
      "RIKO Plataforma": 235,
      "Blue Serviços": 280,
    },
    {
      month: "Fev",
      "TD Consultoria": 300,
      "RIKO Plataforma": 220,
      "Blue Serviços": 360,
    },
    {
      month: "Mar",
      "TD Consultoria": 260,
      "RIKO Plataforma": 160,
      "Blue Serviços": 350,
    },
    {
      month: "Abr",
      "TD Consultoria": 200,
      "RIKO Plataforma": 150,
      "Blue Serviços": 300,
    },
    {
      month: "Mai",
      "TD Consultoria": 190,
      "RIKO Plataforma": 180,
      "Blue Serviços": 210,
    },
    {
      month: "Jun",
      "TD Consultoria": 220,
      "RIKO Plataforma": 280,
      "Blue Serviços": 200,
    },
    {
      month: "Jul",
      "TD Consultoria": 280,
      "RIKO Plataforma": 350,
      "Blue Serviços": 240,
    },
    {
      month: "Ago",
      "TD Consultoria": 310,
      "RIKO Plataforma": 340,
      "Blue Serviços": 290,
    },
    {
      month: "Set",
      "TD Consultoria": 300,
      "RIKO Plataforma": 320,
      "Blue Serviços": 310,
    },
    {
      month: "Out",
      "TD Consultoria": 280,
      "RIKO Plataforma": 280,
      "Blue Serviços": 300,
    },
    {
      month: "Nov",
      "TD Consultoria": 180,
      "RIKO Plataforma": 200,
      "Blue Serviços": 240,
    },
    {
      month: "Dez",
      "TD Consultoria": 140,
      "RIKO Plataforma": 140,
      "Blue Serviços": 200,
    },
  ],
  
};

export const AllProductsData = {
  data: {
    datasets: [
      {
        label: "#",
        index: "01",
        product: "blue start enf sc",
        percentage: faker.datatype.number({ min: 0, max: 100 }),
        graphBarColor: "bg-[#0080ff]",
        graphPercentageBorder: "border-[#0080ff]",
        graphBarBackground: "bg-[#cbe6ff]",
        graphPercentageBackground: "bg-[#f0f9ff]",
        percentageTextColor: "text-[#0080ff]",
        customPadding: "py-3",
      },
      {
        label: "Produto",
        index: "02",
        product: "blue start enf co",
        percentage: faker.datatype.number({ min: 0, max: 100 }),
        graphBarColor: "bg-[#00e096]",
        graphPercentageBorder: "border-[#00e096]",
        graphBarBackground: "bg-[#8afac6]",
        graphPercentageBackground: "bg-[#f0fdf4]",
        percentageTextColor: "text-[#00e096]",
        customPadding: "py-3",
      },
      {
        label: "Alavancagem",
        index: "03",
        product: "blue start apt co",
        percentage: faker.datatype.number({ min: 0, max: 100 }),
        graphBarColor: "bg-[#884eff]",
        graphPercentageBorder: "border-[#884eff]",
        graphBarBackground: "bg-[#bf9eff]",
        graphPercentageBackground: "bg-[#fbf1ff]",
        percentageTextColor: "text-[#884eff]",
        customPadding: "py-3",
      },
      {
        label: "%",
        index: "04",
        product: "blue start apt sc",
        percentage: faker.datatype.number({ min: 0, max: 100 }),
        graphBarColor: "bg-[#FF947A]",
        graphPercentageBorder: "border-[#FF947A]",
        graphBarBackground: "bg-[#ffd4a1]",
        graphPercentageBackground: "bg-[#fef6e6]",
        percentageTextColor: "text-[#FF947A]",
        customPadding: "pt-3",
      },
    ],
  },
};

console.log(data);
