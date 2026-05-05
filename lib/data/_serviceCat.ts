export const _serviceCatEntryBase = [
  {
    title: "Vending",
    items: [
      {
        title: "Snacks Vending Machine",
        descriptions: "Snack Vending Machine has list of snack product items that user can choose and get after paying from QR."
    },
    {
        title: "Sanitory Pad Despensor Machine",
        descriptions: "Sanitory Pad Vending Machine description here..",
        available: true,
      },
    ],
  },
  {
    title: "Educational",
    items: [
      {
        title: "Educational Kits",
        descriptions: "Edu. Kit desc here.."
    },
    {
        title: "DIY Kits",
        descriptions: "DIY kit desc here.."
    },
    {
        title: "Workshop-Training",
        descriptions: "Workshop desc here.."
    },
],
},
{
    title: "Bee Products",
    items: [
        {
            title: "Bee Honey",
            descriptions: "Honey from bee desc here..",
            available: true,
      },
    ],
  },
];

export const _serviceCatEntry = _serviceCatEntryBase.map((sceb) => {
    return {
        title: sceb.title,
        items: sceb.items.map((scebi) => {
            return {
                ...scebi,
                imgURL: `/images/services/${sceb.title}/${scebi.title}.png`,
            }
        })
    }
})