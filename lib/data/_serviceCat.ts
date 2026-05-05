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
        descriptions: "Sanitory Pad Vending Machine has packets of pads that is dispensed after button press.",
        available: true,
      },
    ],
  },
  {
    title: "Educational",
    items: [
      {
        title: "Educational Kits",
        descriptions: ""
    },
    {
        title: "DIY Kits",
        descriptions: ""
    },
    {
        title: "Workshop-Training",
        descriptions: ""
    },
],
},
{
    title: "Bee Products",
    items: [
        {
            title: "Bee Honey",
            descriptions: "",
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