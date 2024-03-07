// https://phukienxedep.com/?gad_source=1&gclid=CjwKCAiAxaCvBhBaEiwAvsLmWERw_46ULUcff2fTZMzSUQU8LCysTX1m_dF0HoPgzHypD_EkW61-hxoCM0oQAvD_BwE

import { MenuItemTable } from "../ProductModel";

export const ContainerMenu: MenuItemTable = {
  items: [
    {
      label: "Nội thất",
      value: "INTERIOR",
      options: [
        { name: "Lót sàn ô tô", value: "LOT_SAN_O_TO", id: "INTERIOR" },
        { name: "Máy hút bụi", value: "MAY_HUT_BUI", id: "INTERIOR" },
        { name: "Lót ghế ô tô", value: "LOT_GHE_O_TO", id: "INTERIOR" },
        {
          name: "Nước hoa ô tô",
          value: "NUOC_HOA_O_TO",
          id: "INTERIOR",
        },
      ],
    },
    {
      label: "Ngoại thất",
      value: "EXTERIOR",
      options: [
        {
          name: "Ốp chìa khóa ô tô",
          value: "OP_CHIA_KHOA_O_TO",
          id: "EXTERIOR",
        },
        {
          name: "Dung dịch chăm sóc xe",
          value: "DUNG_DICH_CHAM_SOC_XE",
          id: "EXTERIOR",
        },
      ],
    },
    {
      label: "Kinh nghiệm",
      value: "EXPERIENCE",
    },
    {
      label: "Tin Tức",
      value: "NEWS",
    },
    {
      label: "Liên hệ",
      value: "CONTACT",
    },
  ],
};
