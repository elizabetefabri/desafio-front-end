import { Search } from "@mui/icons-material";
import { useState } from "react";

export function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Adicione a lógica de pesquisa aqui, por exemplo, filtrando uma lista de itens
  };

  return (
    <div className="flex items-center justify-center w-full h-10 mt-7 bg-gray-100 rounded-lg">
      <div className="flex gap-2 px-4 py-3 items-center w-full">
        <Search className="text-lupa" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="w-full bg-transparent focus:outline-none text-sm text-gray-400"
          placeholder="Pesquisar informações"
        />
      </div>
    </div>
     );
}