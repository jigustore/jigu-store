export const _serviceCatEntryBase = [
  {
    title: "Vending",
    items: [
      {
        title: "Snacks Vending Machine",
        descriptions: "Snack Vending Machine has list of snack product items that user can choose and get after paying from QR.",
        status: "Comming Soon"
    },
    {
        title: "Sanitory Pad Despensor Machine",
        descriptions: "Sanitory Pad Vending Machine description here..",
        status: "Available for order"
      },
    ],
  },
  {
    title: "Educational",
    items: [
      {
        title: "Educational Kits",
        descriptions: "Edu. Kit desc here..",
        status: "Comming Soon",
    },
    {
        title: "DIY Kits",
        descriptions: "DIY kit desc here..",
        // status: "Comming Soon",
    },
    {
        title: "Workshop-Training",
        descriptions: "Workshop desc here..",
        status: "Comming Soon",
    },
],
},
{
    title: "Bee Products",
    items: [
        {
            title: "Bee Honey",
            descriptions: "Honey from bee desc here..",
            status: "In stock"
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