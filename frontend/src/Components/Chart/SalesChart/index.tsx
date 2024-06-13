import { Upload } from '@mui/icons-material';
import { CardColors } from './cardColors';

import imgGraph from "../../../assets/images/png/graph.png";
import imgNote from "../../../assets/images/png/note.png";
import imgTag from "../../../assets/images/png/tag.png";
import userTag from "../../../assets/images/png/user.png";

export function Card() {
  return (
    <div className="flex flex-col items-center h-[250px] w-[550px] bg-white shadow-md p-4 rounded-md ">
      <div className="flex w-full ">
        <div>
          <h1 className="text-text font-bold">Vendas hoje</h1>
          <h2 className="text-[11px] text-zinc-400">Resumo de vendas</h2>
        </div>
        <button className="flex items-center h-8 ml-auto px-3 border-2 rounded-lg text-[10px] cursor-pointer hover:bg-blue hover:text-white hover:border-0">
          <Upload /> Exportar
        </button>
      </div>

      <div className="flex w-full h-full mt-7 gap-6 overflow-x-auto">
        <CardColors
          background={"bg-[#FFE2E5]"}
          src={imgGraph}
          alt={"Graph Icon"}
          valor={"R$ 1,000"}
          total={"Total de vendas"}
          porcentagem={"+8% a mais que ontem"}
        />

        <CardColors
          background={"bg-[#FFF4DE]"}
          src={imgNote}
          alt={"Note Icon"}
          valor={"300"}
          total={"Total de contratos"}
          porcentagem={"+5% a mais que ontem"}
        />

        <CardColors
          background={"bg-[#DCFCE7]"}
          src={imgTag}
          alt={"Tag Icon"}
          valor={"5"}
          total={"Implantados"}
          porcentagem={"+1,2% a mais que ontem"}
        />

        <CardColors
          background={"bg-[#F3E8FF]"}
          src={userTag}
          alt={"Add Icon"}
          valor={"8"}
          total={"Novos contratos"}
          porcentagem={"0.5% a mais que ontem"}
        />
      </div>
    </div>
  );
}
